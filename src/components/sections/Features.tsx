'use client';

import { 
  Users, Clock, Target, Globe, ShoppingCart, Heart,
  Zap, Shield, Smartphone, Brain, Utensils, Star
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Users,
      title: '多人档案智能匹配',
      description: '支持2-4人家庭，自动处理过敏、宗教、医嘱等硬约束，平衡口味偏好与预算要求',
      color: 'from-purple-500 to-purple-600',
      benefits: ['过敏原自动过滤', '口味偏好平衡', '份量智能调节']
    },
    {
      icon: Clock,
      title: '一键生成周菜单',
      description: '30秒内生成完整7天菜单，支持日常/约会/节日等多场景，营养均衡卡路里可控',
      color: 'from-pink-500 to-pink-600',
      benefits: ['30秒快速生成', '7天完整规划', '多场景适配']
    },
    {
      icon: Target,
      title: '精准营养控制',
      description: '基于TDEE计算个人热量需求，智能分配碳水/蛋白质/脂肪比例，支持减脂/增肌/维持目标',
      color: 'from-orange-500 to-orange-600',
      benefits: ['TDEE精准计算', '宏量营养平衡', '目标导向配餐']
    },
    {
      icon: Globe,
      title: '本地化做法链接',
      description: '中国优先B站/下厨房，海外YouTube/SeriousEats，按评分时长智能排序',
      color: 'from-green-500 to-green-600',
      benefits: ['地区智能识别', '多平台聚合', '质量评分排序']
    },
    {
      icon: ShoppingCart,
      title: '智能购物清单',
      description: '自动汇总食材清单，按超市分区分类，支持勾选已购买，减少重复浪费',
      color: 'from-blue-500 to-blue-600',
      benefits: ['自动食材汇总', '超市分区分类', '避免重复购买']
    },
    {
      icon: Heart,
      title: '个性化学习引擎',
      description: '基于收藏、评分、制作频率持续优化推荐，越用越懂你的口味偏好',
      color: 'from-red-500 to-red-600',
      benefits: ['行为数据学习', '口味偏好进化', '推荐精准度提升']
    }
  ];

  const stats = [
    { number: '10000+', label: '精选菜谱库', icon: Utensils },
    { number: '95%+', label: '用户满意度', icon: Star },
    { number: '70%+', label: '菜单采纳率', icon: Target },
    { number: '50%+', label: '决策时间节省', icon: Zap }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
            <Zap className="mr-2 h-4 w-4" />
            <span>强大功能特性</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              一站式解决
            </span>
            <br />
            所有用餐决策难题
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从个人偏好到营养需求，从食材采购到制作教程，智能菜谱生成器为您提供完整的用餐解决方案
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              数据见证产品实力
            </h3>
            <p className="text-purple-100 text-lg">
              用真实数据说话，为您的用餐决策提供可靠保障
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-white/20 mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-100 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Trust */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-green-600 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-900">数据安全保护</h4>
                <p className="text-gray-600 text-sm">所有个人偏好和健康数据仅存储在本地，保护您的隐私安全</p>
              </div>
            </div>
            <div className="flex items-center">
              <Smartphone className="h-8 w-8 text-purple-600 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-900">多端同步</h4>
                <p className="text-gray-600 text-sm">支持手机、平板、电脑多设备访问，随时随地管理您的菜单</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}