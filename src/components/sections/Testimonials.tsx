'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: '李小雨',
      role: '上班族妈妈',
      location: '北京',
      rating: 5,
      avatar: '👩‍💼',
      content: '作为双职工家庭，每天最头疼的就是晚餐吃什么。智能菜谱生成器真的救了我！现在只需要30秒就能搞定一周的菜单，而且考虑到了我老公不吃辣，孩子不吃胡萝卜的要求。营养搭配也很科学，孩子现在吃饭更积极了。',
      beforeAfter: '从每天纠结30分钟到30秒解决',
      tags: ['时间节省', '营养均衡', '家庭友好']
    },
    {
      id: 2,
      name: '张晓明',
      role: '健身达人',
      location: '上海',
      rating: 5,
      avatar: '💪',
      content: '增肌期需要精确控制蛋白质摄入，以前总是算不准。现在AI会根据我的训练量和目标自动计算每餐的宏量营养素，连购物清单都帮我准备好了。最棒的是还能找到B站上的健身餐制作视频，跟着做超简单！',
      beforeAfter: '蛋白质摄入准确率从70%提升到95%',
      tags: ['精准营养', '健身专业', '视频教程']
    },
    {
      id: 3,
      name: '王美丽 & 刘帅哥',
      role: '情侣档',
      location: '杭州',
      rating: 5,
      avatar: '💑',
      content: '交往两年一直为吃什么而争吵，我喜欢川菜他喜欢清淡，我要减肥他要增肌。智能菜谱完美解决了我们的口味冲突！现在每周的约会晚餐都很期待，还会根据节日推荐主题套餐，太贴心了！',
      beforeAfter: '从每周争吵3次到零争执',
      tags: ['口味匹配', '节日主题', '关系和谐']
    },
    {
      id: 4,
      name: '陈大厨',
      role: '美食博主',
      location: '成都',
      rating: 5,
      avatar: '👨‍🍳',
      content: '没想到AI生成的菜谱这么专业！不仅考虑了营养搭配，连食材的季节性和地域特色都考虑进去了。作为美食博主，我经常为选题发愁，现在有了无穷的创作灵感。推荐的制作教程质量也很高，粉丝们都很喜欢。',
      beforeAfter: '每月创作灵感从5个增加到25个',
      tags: ['专业品质', '创作灵感', '教程优质']
    },
    {
      id: 5,
      name: '老刘一家',
      role: '三代同堂',
      location: '广州',
      rating: 5,
      avatar: '👨‍👩‍👧‍👦',
      content: '家里老人血糖高，孩子挑食，我们夫妻俩要控制体重。以前做饭要考虑这么多因素真的很难。现在AI帮我们平衡所有人的需求，奶奶的无糖餐、孩子的营养餐、我们的减脂餐都能在一桌搞定！',
      beforeAfter: '满足全家需求的概率从30%提升到90%',
      tags: ['多代需求', '健康管理', '一桌搞定']
    },
    {
      id: 6,
      name: '小王 & 室友们',
      role: '合租青年',
      location: '深圳',
      rating: 5,
      avatar: '🏠',
      content: '四个人合租，每个人的预算和口味都不一样。以前要么各吃各的要么就很难统一。现在用智能菜谱，能够平衡我们四个人的预算，还会优先推荐可以批量制作的菜品。购物清单按人头分摊费用，特别公平！',
      beforeAfter: '伙食费从人均800元降低到600元',
      tags: ['预算控制', '公平分摊', '批量制作']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-6">
            <Star className="mr-2 h-4 w-4" />
            <span>用户真实评价</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              10万+ 家庭
            </span>
            <br />
            的共同选择
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            听听真实用户如何通过智能菜谱生成器改善了他们的用餐体验
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-16">
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 opacity-20">
            <Quote className="h-16 w-16 text-purple-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Testimonial Content */}
            <div className="lg:col-span-8">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">
                  {currentTestimonial.rating}/5 星评价
                </span>
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 relative z-10">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Before/After */}
              <div className="bg-white rounded-lg p-4 mb-6 border-l-4 border-purple-500">
                <p className="text-sm text-purple-700 font-medium">改变数据</p>
                <p className="text-gray-800 font-semibold">{currentTestimonial.beforeAfter}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentTestimonial.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center">
                <div className="text-4xl mr-4">{currentTestimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentTestimonial.role} • {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation & Stats */}
            <div className="lg:col-span-4 text-center">
              {/* Current Position */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">
                  评价 {currentIndex + 1} / {testimonials.length}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-purple-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-purple-600" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-purple-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100,000+', label: '注册用户', desc: '遍布全国各地' },
            { number: '500万+', label: '生成菜谱', desc: '累计生成次数' },
            { number: '4.9/5', label: '用户评分', desc: '平均满意度' },
            { number: '85%', label: '复购率', desc: '月活跃用户' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="font-medium text-purple-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}