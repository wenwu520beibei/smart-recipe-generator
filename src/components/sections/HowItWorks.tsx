'use client';

import { 
  UserPlus, Settings, Zap, ShoppingCart, 
  ChefHat, Star, ArrowRight, CheckCircle 
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: '创建家庭档案',
      description: '添加家庭成员信息，设置过敏、偏好、营养目标等个性化配置',
      details: [
        '支持2-4人家庭成员配置',
        '过敏源、宗教饮食等硬约束',
        '口味偏好、预算范围等软约束',
        '年龄、性别、活动量等基础信息'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      number: '02',
      icon: Settings,
      title: '选择用餐场景',
      description: '根据不同场景选择菜谱类型，如日常快手、约会晚餐、节日聚餐等',
      details: [
        '日常工作日快手菜',
        '周末精致双人餐',
        '约会浪漫晚餐',
        '节日主题套餐'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    {
      number: '03',
      icon: Zap,
      title: 'AI智能生成',
      description: '30秒内AI分析所有约束条件，生成营养均衡的个性化菜单方案',
      details: [
        '多重约束条件智能匹配',
        'TDEE热量精准计算',
        '营养素比例科学分配',
        '食材多样性自动优化'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      number: '04',
      icon: ShoppingCart,
      title: '生成购物清单',
      description: '自动汇总所需食材，按超市分区分类，支持一键导出分享',
      details: [
        '食材智能去重合并',
        '按超市分区分类整理',
        '支持勾选已购买状态',
        '一键分享给家人朋友'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      number: '05',
      icon: ChefHat,
      title: '跟随教程制作',
      description: '获取本地化制作教程链接，B站、下厨房等优质内容一键直达',
      details: [
        '地区优先推荐（B站/下厨房/YouTube）',
        '按评分和时长智能排序',
        '多平台视频教程聚合',
        'step-by-step详细指导'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      number: '06',
      icon: Star,
      title: '反馈持续优化',
      description: '对制作结果进行评分收藏，AI学习您的喜好，越用越精准',
      details: [
        '5星评分系统',
        '一键收藏喜欢的菜谱',
        '制作频率数据跟踪',
        'AI个性化推荐优化'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '节省70%决策时间',
      description: '从纠结"吃什么"到确定菜单，从30分钟缩短到30秒'
    },
    {
      icon: CheckCircle,
      title: '95%营养需求满足',
      description: '基于科学计算，确保每餐营养均衡，热量控制精准'
    },
    {
      icon: CheckCircle,
      title: '减少30%食材浪费',
      description: '智能购物清单避免重复采购，剩余食材优先使用'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
            <Zap className="mr-2 h-4 w-4" />
            <span>简单易用的操作流程</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              6个步骤
            </span>
            <br />
            从配置到享用美食
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            简单直观的操作流程，让您轻松享受智能化的用餐体验
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-gray-200 hidden md:block"></div>
              )}
              
              <div className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step Icon & Number */}
                <div className="flex-shrink-0">
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center`}>
                      <step.icon className={`w-4 h-4 ${step.textColor}`} />
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {step.description}
                    </p>
                    
                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className={`flex items-center space-x-3 p-3 rounded-lg ${step.bgColor}`}>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span className={`text-sm font-medium ${step.textColor}`}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow (Desktop Only) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              使用后您将获得
            </h3>
            <p className="text-purple-100 text-lg">
              让数据说话，看看智能菜谱生成器如何改善您的用餐体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-purple-100">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              立即体验完整流程
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}