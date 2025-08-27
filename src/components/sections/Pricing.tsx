'use client';

import { useState } from 'react';
import { Check, Star, Zap, Crown, Gift } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: '免费版',
      description: '适合个人或小家庭基础使用',
      price: { monthly: 0, annual: 0 },
      originalPrice: null,
      badge: null,
      icon: Gift,
      color: 'from-gray-500 to-gray-600',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
      features: [
        '每月生成5个菜谱',
        '基础营养信息',
        '简单购物清单',
        '基础视频链接',
        '2人家庭档案',
        '社区支持'
      ],
      limitations: [
        '无高级营养分析',
        '无个性化学习',
        '无批量导出'
      ]
    },
    {
      name: '标准版',
      description: '最受欢迎，满足大部分家庭需求',
      price: { monthly: 19, annual: 15 },
      originalPrice: { monthly: 29, annual: 23 },
      badge: '最受欢迎',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      features: [
        '无限制菜谱生成',
        '完整营养分析和TDEE计算',
        '智能购物清单（可导出）',
        '优质视频教程聚合',
        '4人家庭档案',
        '场景化菜单（约会/节日）',
        '个性化学习引擎',
        '邮件客服支持',
        '数据云端备份'
      ],
      limitations: []
    },
    {
      name: '专业版',
      description: '专业用户和美食达人的终极选择',
      price: { monthly: 39, annual: 31 },
      originalPrice: { monthly: 59, annual: 47 },
      badge: '专业推荐',
      icon: Crown,
      color: 'from-orange-500 to-orange-600',
      buttonStyle: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
      features: [
        '包含标准版全部功能',
        '高级营养分析（微量元素）',
        '自定义菜谱库导入',
        '批量菜单导出（PDF/Excel）',
        '无限家庭成员',
        '专业营养师咨询（月度）',
        '高级主题菜单包',
        'API接口访问',
        '优先客服支持',
        '数据分析报告'
      ],
      limitations: []
    }
  ];

  const savings = Math.round((1 - plans[1].price.annual / plans[1].price.monthly) * 100);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 mb-6">
            <Zap className="mr-2 h-4 w-4" />
            <span>灵活的定价方案</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            选择适合您的
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              菜谱生成计划
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从免费体验到专业服务，我们为不同需求的用户提供最合适的选择
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            按月付费
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`mx-3 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAnnual ? 'bg-purple-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            按年付费
          </span>
          {isAnnual && (
            <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              省{savings}%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 1 ? 'ring-2 ring-purple-600 scale-105' : 'hover:scale-105'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${plan.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Icon & Name */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      ¥{isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-600 ml-1">
                      /{isAnnual ? '月' : '月'}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-1">
                      <span className="text-sm text-gray-500 line-through">
                        原价 ¥{isAnnual ? plan.originalPrice.annual : plan.originalPrice.monthly}/月
                      </span>
                    </div>
                  )}
                  {isAnnual && plan.price.monthly > 0 && (
                    <div className="mt-2 text-sm text-green-600 font-medium">
                      年付节省 ¥{(plan.price.monthly - plan.price.annual) * 12}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start opacity-60">
                      <span className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-gray-400">×</span>
                      <span className="text-gray-500 text-sm line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${plan.buttonStyle}`}>
                  {index === 0 ? '免费开始' : '立即选择'}
                </button>

                {/* Additional Info */}
                {index === 0 && (
                  <p className="text-center text-xs text-gray-500 mt-3">
                    无需信用卡，立即开始
                  </p>
                )}
                {index > 0 && (
                  <p className="text-center text-xs text-gray-500 mt-3">
                    7天无理由退款保证
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            定价常见问题
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: '可以随时升级或降级套餐吗？',
                a: '当然可以！您可以随时在账户设置中升级或降级套餐，价格差异会按比例计算。'
              },
              {
                q: '年付用户可以获得退款吗？',
                a: '我们提供7天无理由退款保证。如果您在7天内不满意，可以获得全额退款。'
              },
              {
                q: '免费版有使用期限吗？',
                a: '免费版永久可用，但每月限制生成5个菜谱。您可以随时升级获得更多功能。'
              },
              {
                q: '支持哪些支付方式？',
                a: '我们支持微信支付、支付宝、银行卡等多种支付方式，安全便捷。'
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">安全支付，数据保护</p>
          <div className="flex justify-center items-center space-x-6 opacity-60">
            <span className="text-2xl">🔒</span>
            <span className="text-lg font-medium text-gray-600">SSL加密</span>
            <span className="text-2xl">💳</span>
            <span className="text-lg font-medium text-gray-600">安全支付</span>
            <span className="text-2xl">🛡️</span>
            <span className="text-lg font-medium text-gray-600">隐私保护</span>
          </div>
        </div>
      </div>
    </section>
  );
}