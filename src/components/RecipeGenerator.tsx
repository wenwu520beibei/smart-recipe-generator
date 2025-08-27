'use client';

import { useState } from 'react';
import { User, Settings, Zap, ShoppingCart, ChefHat, Star, Plus, Trash2, Save } from 'lucide-react';
import { Person, Recipe, WeeklyPlan, ShoppingItem } from '@/types';
import { saveToLocalStorage, loadFromLocalStorage } from '@/lib/utils';

export default function RecipeGenerator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [persons, setPersons] = useState<Person[]>(() => 
    loadFromLocalStorage('family-members', [])
  );
  const [selectedScenario, setSelectedScenario] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState<WeeklyPlan | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    { id: 1, title: '家庭档案', icon: User },
    { id: 2, title: '选择场景', icon: Settings },
    { id: 3, title: '生成菜谱', icon: Zap },
    { id: 4, title: '购物清单', icon: ShoppingCart },
  ];

  const scenarios = [
    {
      id: 'daily',
      name: '日常工作日',
      description: '快手菜，30分钟内完成',
      icon: '⏰',
      cookingTime: 30,
      complexity: 'simple'
    },
    {
      id: 'weekend',
      name: '周末精致餐',
      description: '有时间慢慢烹饪，营养丰富',
      icon: '🍽️',
      cookingTime: 60,
      complexity: 'medium'
    },
    {
      id: 'date',
      name: '约会晚餐',
      description: '浪漫情调，精美摆盘',
      icon: '💕',
      cookingTime: 45,
      complexity: 'medium'
    },
    {
      id: 'party',
      name: '聚会宴请',
      description: '适合多人，丰盛大餐',
      icon: '🎉',
      cookingTime: 90,
      complexity: 'complex'
    }
  ];

  const addPerson = () => {
    const newPerson: Person = {
      id: Date.now().toString(),
      name: '',
      age: 25,
      relationship: '',
      portionMultiplier: 1,
      hardConstraints: {
        allergies: [],
        dietary: [],
        medical: [],
        personal: []
      },
      softConstraints: {
        spiceLevel: 3,
        cuisinePreferences: [],
        cookingTime: 30,
        budgetRange: 'medium'
      }
    };
    setPersons([...persons, newPerson]);
  };

  const updatePerson = (id: string, updates: Partial<Person>) => {
    setPersons(persons.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const removePerson = (id: string) => {
    setPersons(persons.filter(p => p.id !== id));
  };

  const saveFamilyMembers = () => {
    saveToLocalStorage('family-members', persons);
    alert('家庭成员信息已保存！');
  };

  const generateMockRecipes = (): Recipe[] => {
    const mockRecipes: Recipe[] = [
      {
        id: '1',
        name: '宫保鸡丁',
        cuisine: '川菜',
        cookingTime: 25,
        difficulty: '中等',
        servings: 2,
        calories: 280,
        macros: { carbs: 15, protein: 35, fat: 12 },
        ingredients: [
          { name: '鸡胸肉', amount: 200, unit: 'g', category: '肉类' },
          { name: '花生米', amount: 50, unit: 'g', category: '坚果' },
          { name: '青椒', amount: 1, unit: '个', category: '蔬菜' },
        ],
        instructions: ['鸡肉切丁腌制', '热锅爆炒', '调味装盘'],
        tags: ['下饭菜', '经典菜'],
        videoLinks: [
          { platform: 'B站', url: '#', duration: 10, rating: 4.8, language: 'zh' }
        ]
      },
      {
        id: '2',
        name: '清蒸鲈鱼',
        cuisine: '粤菜',
        cookingTime: 20,
        difficulty: '简单',
        servings: 2,
        calories: 160,
        macros: { carbs: 2, protein: 28, fat: 6 },
        ingredients: [
          { name: '鲈鱼', amount: 1, unit: '条', category: '海鲜' },
          { name: '生姜', amount: 3, unit: '片', category: '调料' },
          { name: '蒸鱼豉油', amount: 2, unit: '勺', category: '调料' },
        ],
        instructions: ['鱼处理干净', '上锅蒸制', '淋油调味'],
        tags: ['清淡', '营养'],
        videoLinks: [
          { platform: '下厨房', url: '#', duration: 15, rating: 4.9, language: 'zh' }
        ]
      }
    ];
    return mockRecipes;
  };

  const generateWeeklyPlan = async () => {
    setIsGenerating(true);
    
    try {
      // 调用真实的AI API生成菜谱
      const response = await fetch('/api/generate-recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          persons,
          scenario: selectedScenario,
          daysCount: 7
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'AI菜谱生成失败');
      }

      const data = await response.json();
      const aiRecipes = data.recipes;

      // 构建周计划
      const weeklyPlan: WeeklyPlan = {
        id: Date.now().toString(),
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        dailyPlans: Array.from({ length: 7 }, (_, i) => ({
          id: (i + 1).toString(),
          date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
          meals: {
            dinner: aiRecipes[i % aiRecipes.length] || generateMockRecipes()[0]
          },
          totalCalories: aiRecipes[i % aiRecipes.length]?.calories || 600,
          totalMacros: aiRecipes[i % aiRecipes.length]?.macros || { carbs: 45, protein: 40, fat: 20 }
        })),
        shoppingList: generateShoppingListFromRecipes(aiRecipes)
      };

      setGeneratedPlan(weeklyPlan);
      setCurrentStep(4);

      // 保存生成历史
      saveToLocalStorage('latest-generated-plan', weeklyPlan);

    } catch (error) {
      console.error('AI菜谱生成失败:', error);
      
      // 如果AI生成失败，回退到模拟数据
      alert('AI菜谱生成暂时不可用，为您提供示例菜谱');
      const mockRecipes = generateMockRecipes();
      const mockPlan: WeeklyPlan = {
        id: Date.now().toString(),
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        dailyPlans: Array.from({ length: 7 }, (_, i) => ({
          id: (i + 1).toString(),
          date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
          meals: {
            dinner: mockRecipes[i % mockRecipes.length]
          },
          totalCalories: 600,
          totalMacros: { carbs: 45, protein: 40, fat: 20 }
        })),
        shoppingList: [
          { name: '鸡胸肉', amount: 400, unit: 'g', category: '肉类' },
          { name: '鲈鱼', amount: 2, unit: '条', category: '海鲜' },
          { name: '花生米', amount: 100, unit: 'g', category: '坚果' },
        ]
      };
      
      setGeneratedPlan(mockPlan);
      setCurrentStep(4);
    } finally {
      setIsGenerating(false);
    }
  };

  // 从菜谱生成购物清单的辅助函数
  const generateShoppingListFromRecipes = (recipes: Recipe[]): ShoppingItem[] => {
    const ingredientMap: { [key: string]: ShoppingItem } = {};

    recipes.forEach(recipe => {
      if (recipe.ingredients) {
        recipe.ingredients.forEach(ingredient => {
          const key = ingredient.name;
          if (ingredientMap[key]) {
            ingredientMap[key].amount += ingredient.amount;
          } else {
            ingredientMap[key] = {
              name: ingredient.name,
              amount: ingredient.amount,
              unit: ingredient.unit,
              category: ingredient.category,
              checked: false
            };
          }
        });
      }
    });

    return Object.values(ingredientMap);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">设置家庭成员</h2>
              <p className="text-gray-600">添加家庭成员信息，设置饮食偏好和限制</p>
            </div>

            <div className="space-y-4">
              {persons.map((person, index) => (
                <div key={person.id} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">成员 {index + 1}</h3>
                    <button
                      onClick={() => removePerson(person.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="姓名"
                      value={person.name}
                      onChange={(e) => updatePerson(person.id, { name: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="number"
                      placeholder="年龄"
                      value={person.age}
                      onChange={(e) => updatePerson(person.id, { age: parseInt(e.target.value) })}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">辣度偏好</label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={person.softConstraints.spiceLevel}
                      onChange={(e) => updatePerson(person.id, {
                        softConstraints: {
                          ...person.softConstraints,
                          spiceLevel: parseInt(e.target.value)
                        }
                      })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>不吃辣</span>
                      <span>微辣</span>
                      <span>中辣</span>
                      <span>重辣</span>
                      <span>变态辣</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={addPerson}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Plus className="h-5 w-5 mr-2" />
                添加成员
              </button>
              <button
                onClick={saveFamilyMembers}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                <Save className="h-5 w-5 mr-2" />
                保存设置
              </button>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                disabled={persons.length === 0}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一步：选择场景
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">选择用餐场景</h2>
              <p className="text-gray-600">不同场景会生成不同风格的菜谱</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scenarios.map((scenario) => (
                <div
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario.id)}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                    selectedScenario === scenario.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-4 text-center">{scenario.icon}</div>
                  <h3 className="text-lg font-semibold text-center mb-2">{scenario.name}</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">{scenario.description}</p>
                  <div className="text-xs text-gray-500 text-center">
                    预计用时: {scenario.cookingTime} 分钟
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                上一步
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                disabled={!selectedScenario}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一步：生成菜谱
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">AI 智能生成菜谱</h2>
              <p className="text-gray-600">根据您的家庭设置和场景需求，为您定制专属菜谱</p>
            </div>

            {!generatedPlan && !isGenerating && (
              <div className="text-center py-12">
                <ChefHat className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <button
                  onClick={generateWeeklyPlan}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  <Zap className="h-6 w-6 inline mr-2" />
                  开始生成周菜谱
                </button>
              </div>
            )}

            {isGenerating && (
              <div className="text-center py-12">
                <div className="animate-spin h-16 w-16 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI正在为您生成菜谱...</h3>
                <p className="text-gray-600">分析家庭成员偏好，匹配营养需求，生成最佳方案</p>
              </div>
            )}

            {generatedPlan && (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-green-900">菜谱生成完成！</h3>
                  </div>
                  <p className="text-green-800">已为您生成7天菜谱，包含营养分析和购物清单</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {generatedPlan.dailyPlans.map((day, index) => (
                    <div key={day.id} className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">
                            {['周一', '周二', '周三', '周四', '周五', '周六', '周日'][index]}
                          </h4>
                          <p className="text-gray-600">{day.meals.dinner?.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            {day.totalCalories} 千卡
                          </p>
                          <p className="text-xs text-purple-600">
                            {day.meals.dinner?.cookingTime} 分钟
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                上一步
              </button>
              {generatedPlan && (
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700"
                >
                  查看购物清单
                </button>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">智能购物清单</h2>
              <p className="text-gray-600">按分类整理的食材清单，减少遗漏和浪费</p>
            </div>

            {generatedPlan && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">本周购物清单</h3>
                  <div className="space-y-3">
                    {generatedPlan.shoppingList.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-3 h-4 w-4 text-purple-600"
                          />
                          <span className="font-medium">{item.name}</span>
                          <span className="ml-2 text-sm text-gray-500">
                            ({item.category})
                          </span>
                        </div>
                        <span className="text-purple-600 font-medium">
                          {item.amount} {item.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                      导出清单
                    </button>
                    <button className="flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                      分享给家人
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                上一步
              </button>
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setGeneratedPlan(null);
                  setSelectedScenario('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700"
              >
                重新生成菜谱
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    currentStep >= step.id
                      ? 'bg-purple-600 border-purple-600 text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-purple-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`ml-6 h-0.5 w-16 ${
                    currentStep > step.id ? 'bg-purple-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-50 rounded-2xl p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}