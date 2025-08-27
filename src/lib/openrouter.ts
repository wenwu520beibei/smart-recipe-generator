import { Person, Recipe } from '@/types';

interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenRouterResponse {
  id: string;
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class OpenRouterAPI {
  private apiKey: string;
  private apiUrl: string;
  private model: string;

  constructor() {
    this.apiKey = process.env.OPENROUTER_API_KEY || '';
    this.apiUrl = process.env.OPENROUTER_API_URL || 'https://openrouter.ai/api/v1/chat/completions';
    this.model = process.env.OPENROUTER_MODEL || 'google/gemini-2.5-pro';

    if (!this.apiKey) {
      throw new Error('OPENROUTER_API_KEY is not configured');
    }
  }

  async generateRecipes(
    persons: Person[], 
    scenario: string, 
    daysCount: number = 7
  ): Promise<Recipe[]> {
    const systemPrompt = this.buildSystemPrompt();
    const userPrompt = this.buildUserPrompt(persons, scenario, daysCount);

    const messages: OpenRouterMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ];

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
          'X-Title': '智能菜谱生成器'
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature: 0.8,
          max_tokens: 4000,
          top_p: 0.9
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter API error: ${response.status} ${errorText}`);
      }

      const data: OpenRouterResponse = await response.json();
      return this.parseRecipeResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error calling OpenRouter API:', error);
      throw error;
    }
  }

  private buildSystemPrompt(): string {
    return `你是一个专业的智能菜谱生成助手，专门为多人家庭生成个性化的菜谱方案。

你的任务是：
1. 根据家庭成员的个人偏好、过敏信息、营养需求生成菜谱
2. 考虑不同的用餐场景（日常/约会/聚会/节日）
3. 确保营养均衡，卡路里控制精准
4. 提供具体的食材清单和制作难度评估
5. 推荐合适的制作教程来源（B站/下厨房/YouTube等）

请始终以JSON格式回复，包含以下结构：
{
  "recipes": [
    {
      "id": "unique_id",
      "name": "菜名",
      "cuisine": "菜系",
      "cookingTime": 30,
      "difficulty": "简单/中等/困难",
      "servings": 2,
      "calories": 350,
      "macros": {
        "carbs": 45,
        "protein": 25,
        "fat": 15
      },
      "ingredients": [
        {
          "name": "食材名",
          "amount": 200,
          "unit": "g",
          "category": "蔬菜/肉类/调料等"
        }
      ],
      "instructions": ["步骤1", "步骤2"],
      "tags": ["标签1", "标签2"],
      "videoLinks": [
        {
          "platform": "B站",
          "url": "#",
          "duration": 10,
          "rating": 4.8,
          "language": "zh"
        }
      ],
      "suitableFor": ["适合的人员ID"],
      "alternatives": ["替代方案说明"]
    }
  ],
  "shoppingList": [
    {
      "name": "食材名",
      "amount": 500,
      "unit": "g",
      "category": "蔬菜",
      "estimatedPrice": 15
    }
  ],
  "nutritionSummary": {
    "totalCalories": 2100,
    "averageCaloriesPerPerson": 525,
    "macroBalance": {
      "carbs": 50,
      "protein": 25,
      "fat": 25
    }
  }
}`;
  }

  private buildUserPrompt(persons: Person[], scenario: string, daysCount: number): string {
    const personsInfo = persons.map((person, index) => 
      `成员${index + 1}：${person.name || `成员${index + 1}`}
      - 年龄: ${person.age}岁
      - 份量系数: ${person.portionMultiplier}
      - 过敏原: ${person.hardConstraints.allergies.join(', ') || '无'}
      - 饮食限制: ${person.hardConstraints.dietary.join(', ') || '无'}
      - 医疗禁忌: ${person.hardConstraints.medical.join(', ') || '无'}
      - 个人禁忌: ${person.hardConstraints.personal.join(', ') || '无'}
      - 辣度偏好: ${person.softConstraints.spiceLevel}/5
      - 菜系偏好: ${person.softConstraints.cuisinePreferences.join(', ') || '无特殊偏好'}
      - 烹饪时长要求: ${person.softConstraints.cookingTime}分钟内
      - 预算范围: ${person.softConstraints.budgetRange}`
    ).join('\n\n');

    const scenarioMapping = {
      'daily': '日常工作日快手菜，简单易做，营养均衡',
      'weekend': '周末精致菜，有时间慢慢烹饪，品质优先',
      'date': '约会浪漫晚餐，注重摆盘和氛围',
      'party': '聚会宴请菜，适合多人分享，丰盛大餐'
    };

    return `请为以下家庭生成${daysCount}天的菜谱计划：

家庭成员信息：
${personsInfo}

用餐场景：${scenarioMapping[scenario as keyof typeof scenarioMapping] || scenario}

要求：
1. 严格遵守所有过敏原和饮食限制
2. 平衡所有成员的口味偏好
3. 控制每餐烹饪时间在成员要求范围内
4. 确保营养均衡，适合各年龄段成员
5. 提供经济实用的食材搭配
6. 避免重复食材和口味
7. 根据场景调整菜品风格和复杂度

请生成具体的菜谱方案，包含详细的食材清单和制作指导。`;
  }

  private parseRecipeResponse(content: string): Recipe[] {
    try {
      // 清理响应内容，移除可能的markdown标记
      const cleanContent = content
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();

      const parsedResponse = JSON.parse(cleanContent);
      
      // 验证响应结构
      if (!parsedResponse.recipes || !Array.isArray(parsedResponse.recipes)) {
        throw new Error('Invalid response format: missing recipes array');
      }

      return parsedResponse.recipes;
    } catch (error) {
      console.error('Error parsing recipe response:', error);
      console.error('Raw content:', content);
      
      // 返回备用数据结构
      return this.getFallbackRecipes();
    }
  }

  private getFallbackRecipes(): Recipe[] {
    return [
      {
        id: 'fallback-1',
        name: '简易蒸蛋',
        cuisine: '家常菜',
        cookingTime: 15,
        difficulty: '简单',
        servings: 2,
        calories: 120,
        macros: { carbs: 2, protein: 12, fat: 8 },
        ingredients: [
          { name: '鸡蛋', amount: 2, unit: '个', category: '蛋类' },
          { name: '温水', amount: 120, unit: 'ml', category: '调料' }
        ],
        instructions: [
          '鸡蛋打散，加入温水搅拌均匀',
          '过筛去泡沫，上锅蒸10分钟'
        ],
        tags: ['简单', '营养'],
        videoLinks: [
          { platform: 'B站', url: '#', duration: 5, rating: 4.5, language: 'zh' }
        ]
      }
    ];
  }
}

// 工厂函数，用于在客户端组件中使用
export function createOpenRouterAPI() {
  return new OpenRouterAPI();
}