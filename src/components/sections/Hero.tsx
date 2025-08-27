'use client';

import { useState } from 'react';
import { Play, Users, Clock, Target, Sparkles, ChefHat, Star, X } from 'lucide-react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const highlights = [
    { icon: Users, text: '多人口味智能匹配', color: 'text-purple-600' },
    { icon: Clock, text: '一键生成周菜单', color: 'text-pink-600' },
    { icon: Target, text: '营养卡路里精确控制', color: 'text-orange-600' },
  ];

  return (
    <section id="home" className="relative pt-16 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-25 to-orange-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <ChefHat className="h-16 w-16 text-purple-300 transform rotate-12" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Sparkles className="h-12 w-12 text-pink-300 transform -rotate-12" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Star className="h-10 w-10 text-orange-300 transform rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>全新AI驱动，智能化菜谱生成</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-gray-900">告别</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                "今天吃什么"
              </span>
              <span className="block text-gray-900 text-3xl sm:text-4xl lg:text-5xl mt-2">
                的决策疲劳
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              多人多场景菜谱生成器，一次配置换来一周稳定输出。营养均衡、卡路里可控、本地化做法链接，让美食决策变得轻松愉快。
            </p>

            {/* Highlight Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2 p-3 rounded-lg bg-white/50 backdrop-blur-sm">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/generator" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group inline-block text-center">
                <span className="flex items-center justify-center">
                  立即开始生成菜谱
                  <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
                </span>
              </a>
              
              <button 
                className="flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5 text-purple-600" />
                观看演示视频
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">已被以下用户群体信赖</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  忙碌的上班族家庭
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  追求健康的情侣
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  合租的年轻人
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="mt-16 lg:mt-0 lg:col-span-5">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">本周菜单预览</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">已生成</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { day: '周一', meal: '宫保鸡丁 + 青菜汤', cal: '580 kcal' },
                    { day: '周二', meal: '糖醋排骨 + 蒸蛋', cal: '620 kcal' },
                    { day: '周三', meal: '清蒸鲈鱼 + 时蔬', cal: '520 kcal' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-800">{item.day}</span>
                        <p className="text-sm text-gray-600">{item.meal}</p>
                      </div>
                      <span className="text-sm font-medium text-purple-600">{item.cal}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-colors">
                  查看完整菜单
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
                <Star className="h-6 w-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 shadow-lg">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg p-1 max-w-4xl w-full mx-4">
            <button
              className="absolute -top-10 -right-10 text-white hover:text-gray-300"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-white text-lg">演示视频加载中...</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}