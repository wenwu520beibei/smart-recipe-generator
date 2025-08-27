'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '智能菜谱生成器是如何工作的？',
      answer: 'AI系统会分析您家庭成员的偏好、过敏信息、营养需求等多维度数据，结合当前场景（日常/约会/节日）和预算约束，从庞大的菜谱数据库中智能匹配最适合的菜谱组合，确保营养均衡且符合所有人的需求。'
    },
    {
      question: '生成的菜谱真的能满足所有家庭成员的需求吗？',
      answer: '我们的AI引擎会优先处理硬约束（过敏、宗教、医嘱禁忌），然后平衡软约束（口味偏好、预算、时长）。当存在冲突时，系统会提供替代方案或分餐建议。根据用户反馈，95%的家庭能找到满意的解决方案。'
    },
    {
      question: '营养计算的准确性如何保证？',
      answer: '我们基于权威营养数据库（如USDA），结合中国食物成分表，使用科学的TDEE计算公式。每个菜谱的营养数据都经过营养师审核。同时提供宏量营养素（碳水/蛋白质/脂肪）的详细分解，确保营养搭配科学合理。'
    },
    {
      question: '制作教程的视频来源是什么？',
      answer: '我们与B站、下厨房、豆果美食等优质内容平台合作，根据您的地区和语言偏好智能推荐。所有推荐视频都经过评分和时长筛选，确保内容质量。海外用户会优先推荐YouTube、SeriousEats等平台的内容。'
    },
    {
      question: '个人数据和偏好信息安全吗？',
      answer: '您的所有个人信息都采用端到端加密存储，我们遵循最严格的数据保护标准。偏好数据仅用于改善您的个人体验，绝不会用于其他商业用途或与第三方分享。您可以随时导出或删除自己的数据。'
    },
    {
      question: '如果生成的菜谱不满意，可以重新生成吗？',
      answer: '当然可以！您可以无限次重新生成，也可以针对单个菜谱进行替换。系统会记住您的反馈，避免推荐相似的不喜欢的菜谱。每次生成都会优化算法，让推荐越来越精准。'
    },
    {
      question: '购物清单功能具体包括什么？',
      answer: '自动汇总一周所需食材，智能合并相同食材，按超市分区（蔬果/肉类/调料等）分类整理。支持勾选已购买状态，可一键分享给家人，还能根据当地超市布局优化购物路线。'
    },
    {
      question: '是否支持特殊饮食需求（如素食、生酮）？',
      answer: '完全支持！我们内置了素食、纯素、生酮、低碳水、无麸质、地中海饮食等多种特殊饮食模式。您可以在家庭档案中设置，AI会严格按照相应的营养原则和食材限制进行推荐。'
    },
    {
      question: '可以导入自己的私人菜谱吗？',
      answer: '专业版用户可以导入个人菜谱库，系统会自动分析营养成分并整合到推荐算法中。您也可以标记家传菜谱或特别喜爱的菜品，AI会优先考虑这些菜谱在合适的场景中推荐。'
    },
    {
      question: '如果遇到技术问题，如何获得帮助？',
      answer: '我们提供多层次的客服支持：免费用户可使用社区论坛和邮件支持；付费用户享有优先邮件和在线客服；专业版用户还可预约专业营养师一对一咨询。通常技术问题在4小时内得到响应。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>常见问题解答</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              您可能想了解的
            </span>
            <br />
            问题都在这里
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们整理了用户最关心的问题，如果您还有其他疑问，随时联系我们的客服团队
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 mb-4"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            还有其他问题？
          </h3>
          <p className="text-purple-100 mb-6">
            我们的专业客服团队随时为您解答疑问
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200">
              在线客服咨询
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              发送邮件询问
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}