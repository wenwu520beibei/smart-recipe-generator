'use client';

import { ChefHat, Mail, MapPin, Phone, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '产品功能',
      links: [
        { name: '智能菜谱生成', href: '#features' },
        { name: '营养分析', href: '#features' },
        { name: '购物清单', href: '#features' },
        { name: '视频教程', href: '#features' }
      ]
    },
    {
      title: '使用指南',
      links: [
        { name: '快速入门', href: '#how-it-works' },
        { name: '家庭设置', href: '#how-it-works' },
        { name: '场景选择', href: '#how-it-works' },
        { name: '常见问题', href: '#faq' }
      ]
    },
    {
      title: '定价与支持',
      links: [
        { name: '定价方案', href: '#pricing' },
        { name: '免费体验', href: '#pricing' },
        { name: '客服支持', href: '#faq' },
        { name: '用户教程', href: '#how-it-works' }
      ]
    },
    {
      title: '公司信息',
      links: [
        { name: '关于我们', href: '/about' },
        { name: '隐私政策', href: '/privacy' },
        { name: '服务条款', href: '/terms' },
        { name: '企业合作', href: '/partnership' }
      ]
    }
  ];

  const socialLinks = [
    { name: '微信', href: '#', icon: '📱' },
    { name: '微博', href: '#', icon: '📺' },
    { name: '小红书', href: '#', icon: '📍' },
    { name: '抖音', href: '#', icon: '🎥' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <ChefHat className="h-8 w-8 text-purple-400" />
                  <Sparkles className="h-3 w-3 text-pink-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  智能菜谱
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                告别“今天吃什么”的决策疲劳，让AI为您的家庭定制个性化的营养菜谱，享受美食的同时保持健康生活。
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-3 text-purple-400" />
                  <span className="text-sm">neurahorizoncharacter@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-3 text-purple-400" />
                  <span className="text-sm">中国上海</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-3 text-purple-400" />
                  <span className="text-sm">7x24小时在线客服</span>
                </div>
              </div>
            </div>
            
            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">关注我们：</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl hover:scale-110 transition-transform duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-gray-400 text-sm whitespace-nowrap">
                订阅菜谱更新：
              </span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="输入您的邮箱"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-purple-500 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-r-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-200 text-sm">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p className="flex items-center">
                © {currentYear} NeuraHorizon. 保留所有权利。
                <Heart className="h-4 w-4 mx-2 text-red-400" />
                精心打造
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                隐私政策
              </a>
              <a href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                使用条款
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Cookie 政策
              </a>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-3">
                数据安全与技术支持
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🔒</span>
                  <span className="text-xs text-gray-500">SSL加密</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">☁️</span>
                  <span className="text-xs text-gray-500">云安全</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🎨</span>
                  <span className="text-xs text-gray-500">AI驱动</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">📊</span>
                  <span className="text-xs text-gray-500">数据科学</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}