# 🍽️ 智能菜谱生成器

基于 AI 的多人多场景菜谱推荐工具，告别"今天吃什么"的决策疲劳！

## ✨ 功能特点

- 🤖 **AI 驱动**: 使用 Google Gemini 2.5 Pro 生成个性化菜谱
- 👥 **多人支持**: 支持 2-4 人家庭，智能平衡不同口味偏好
- 🚫 **智能约束**: 自动处理过敏原、宗教饮食、医疗禁忌
- 🍳 **多场景适配**: 日常快手菜、约会晚餐、聚会宴请、节日套餐
- 📊 **营养分析**: 基于 TDEE 的精准热量计算和宏量营养素平衡
- 🛒 **智能购物清单**: 自动汇总食材，按超市分区分类
- 📱 **响应式设计**: 完美适配手机和电脑访问
- 💾 **本地存储**: 用户偏好持久化，无需注册

## 🚀 技术栈

- **前端**: Next.js 15, TypeScript, Tailwind CSS
- **AI**: OpenRouter API + Google Gemini 2.5 Pro
- **图标**: Lucide React
- **字体**: Google Fonts (Inter + Noto Sans SC)
- **部署**: Vercel

## 📖 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/wenwu520beibei/smart-recipe-generator.git
cd smart-recipe-generator
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

```bash
# 复制环境变量模板
cp .env.example .env.local

# 编辑 .env.local 文件，添加您的 OpenRouter API 密钥
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

> 📝 获取 OpenRouter API 密钥：https://openrouter.ai/keys

### 4. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 🏗️ 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   └── generate-recipes/ # AI 菜谱生成接口
│   ├── generator/         # 菜谱生成器页面
│   └── layout.tsx         # 根布局（SEO 优化）
├── components/            # React 组件
│   ├── sections/         # 页面区块组件
│   └── RecipeGenerator.tsx # 核心生成器组件
├── lib/                  # 工具库
│   ├── openrouter.ts    # AI API 封装
│   └── utils.ts         # 通用工具函数
└── types/               # TypeScript 类型定义
```

## 🌟 核心功能

### 1. 智能菜谱生成
- 基于家庭成员偏好生成个性化菜谱
- 支持过敏原自动过滤
- 营养均衡和热量控制

### 2. 多场景适配
- **日常工作日**: 快手菜，30分钟内完成
- **周末精致餐**: 有时间慢慢烹饪，品质优先
- **约会晚餐**: 浪漫摆盘，氛围优先
- **聚会宴请**: 适合多人，丰盛大餐

### 3. 营养分析
- TDEE（每日总能量消耗）计算
- 宏量营养素（碳水/蛋白质/脂肪）平衡
- 个性化热量目标

### 4. 智能购物清单
- 自动汇总一周所需食材
- 按超市分区分类整理
- 支持勾选已购买状态

## 🚀 部署指南

### Vercel 部署（推荐）

1. 点击一键部署按钮：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wenwu520beibei/smart-recipe-generator)

2. 在 Vercel 控制台配置环境变量：
   - `OPENROUTER_API_KEY`: 您的 OpenRouter API 密钥
   - `NEXT_PUBLIC_APP_URL`: 您的部署域名

### 手动部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📝 API 文档

### POST /api/generate-recipes

生成 AI 菜谱的核心接口。

**请求体：**
```json
{
  "persons": [
    {
      "id": "1",
      "name": "张三",
      "age": 25,
      "hardConstraints": {
        "allergies": ["花生"],
        "dietary": ["清真"]
      },
      "softConstraints": {
        "spiceLevel": 3,
        "cookingTime": 30
      }
    }
  ],
  "scenario": "daily",
  "daysCount": 7
}
```

**响应：**
```json
{
  "success": true,
  "recipes": [...],
  "generatedAt": "2023-12-01T12:00:00Z"
}
```

## 🛡️ 安全特性

- ✅ API 密钥安全存储（环境变量）
- ✅ 客户端敏感信息保护
- ✅ 请求验证和错误处理
- ✅ 生产环境错误信息过滤

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👏 致谢

- [Next.js](https://nextjs.org) - React 框架
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [OpenRouter](https://openrouter.ai) - AI API 平台
- [Google Gemini](https://gemini.google.com) - AI 模型
- [Lucide](https://lucide.dev) - 图标库

## 📞 联系我们

- 📧 邮箱: neurahorizoncharacter@gmail.com
- 🐙 GitHub: [@wenwu520beibei](https://github.com/wenwu520beibei)
- 🌐 网站: [https://smart-recipe-generator.vercel.app](https://smart-recipe-generator.vercel.app)

---

<div align="center">
  <p>🤖 Generated with <a href="https://claude.ai/code">Claude Code</a></p>
</div>
