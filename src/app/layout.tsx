import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "智能菜谱生成器 | 告别今天吃什么的决策疲劳 - NeuraHorizon",
  description: "智能菜谱生成器是一款基于AI的多人多场景菜谱推荐工具。支持过敏原过滤、营养分析、TDEE计算、购物清单生成。一次配置换来一周稳定输出，让美食决策变得轻松愉快。适合情侣、家庭、合租用户。",
  keywords: "菜谱生成器,智能菜谱,AI菜谱,营养搭配,TDEE计算,购物清单,多人菜谱,过敏原过滤,健康饮食,菜谱推荐,家庭用餐,情侣菜谱,减脂菜谱,增肌菜谱,节日菜谱,约会菜谱,快手菜,营养分析,食材清单,烹饪教程",
  authors: [{ name: "NeuraHorizon" }],
  creator: "NeuraHorizon",
  publisher: "NeuraHorizon",
  robots: "index, follow",
  openGraph: {
    title: "智能菜谱生成器 | 告别今天吃什么的决策疲劳",
    description: "AI驱动的多人多场景菜谱生成器，支持过敏原过滤、营养分析、购物清单生成。一次配置换来一周稳定输出。",
    url: "https://smart-recipe-generator.com",
    siteName: "智能菜谱生成器",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "智能菜谱生成器",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "智能菜谱生成器 | 告别今天吃什么的决策疲劳",
    description: "AI驱动的多人多场景菜谱生成器，支持过敏原过滤、营养分析、购物清单生成。",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#9333ea",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://smart-recipe-generator.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "智能菜谱生成器",
              "description": "基于AI的多人多场景菜谱推荐工具，支持过敏原过滤、营养分析、购物清单生成",
              "url": "https://smart-recipe-generator.com",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "CNY"
              },
              "author": {
                "@type": "Organization",
                "name": "NeuraHorizon",
                "email": "neurahorizoncharacter@gmail.com"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "10000"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
