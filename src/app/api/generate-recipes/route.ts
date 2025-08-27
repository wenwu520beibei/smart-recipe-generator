import { NextRequest, NextResponse } from 'next/server';
import { OpenRouterAPI } from '@/lib/openrouter';
import { Person } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { persons, scenario, daysCount = 7 } = body;

    // 验证输入数据
    if (!persons || !Array.isArray(persons) || persons.length === 0) {
      return NextResponse.json(
        { error: '请提供至少一个家庭成员信息' },
        { status: 400 }
      );
    }

    if (!scenario) {
      return NextResponse.json(
        { error: '请选择用餐场景' },
        { status: 400 }
      );
    }

    // 验证API密钥
    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: 'OpenRouter API密钥未配置' },
        { status: 500 }
      );
    }

    // 创建API实例并生成菜谱
    const openRouterAPI = new OpenRouterAPI();
    const recipes = await openRouterAPI.generateRecipes(
      persons as Person[],
      scenario,
      daysCount
    );

    return NextResponse.json({
      success: true,
      recipes,
      generatedAt: new Date().toISOString(),
      daysCount,
      scenario
    });

  } catch (error) {
    console.error('Generate recipes API error:', error);
    
    return NextResponse.json(
      { 
        error: 'AI菜谱生成失败，请稍后重试',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: '智能菜谱生成API已就绪',
    version: '1.0.0',
    endpoints: {
      POST: '/api/generate-recipes - 生成AI菜谱'
    },
    requiredFields: {
      persons: 'Person[] - 家庭成员信息',
      scenario: 'string - 用餐场景(daily/weekend/date/party)',
      daysCount: 'number - 天数（可选，默认7天）'
    }
  });
}