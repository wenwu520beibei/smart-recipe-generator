import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTDEE(age: number, weight: number, height: number, gender: 'male' | 'female', activityLevel: string): number {
  const bmr = gender === 'male' 
    ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };
  
  return Math.round(bmr * (activityMultipliers[activityLevel as keyof typeof activityMultipliers] || 1.2));
}

export function formatCalories(calories: number): string {
  return `${Math.round(calories)} kcal`;
}

export function formatMacros(macros: { carbs: number; protein: number; fat: number }): string {
  return `碳水: ${Math.round(macros.carbs)}g | 蛋白质: ${Math.round(macros.protein)}g | 脂肪: ${Math.round(macros.fat)}g`;
}

export function getVideoLinksByRegion(region: string): { platform: string; baseUrl: string; searchUrl: string }[] {
  const linkMap = {
    'CN': [
      { platform: '哔哩哔哩', baseUrl: 'https://www.bilibili.com', searchUrl: 'https://search.bilibili.com/all?keyword=' },
      { platform: '下厨房', baseUrl: 'https://www.xiachufang.com', searchUrl: 'https://www.xiachufang.com/search/?keyword=' },
      { platform: '豆果美食', baseUrl: 'https://www.douguo.com', searchUrl: 'https://www.douguo.com/search/recipe/' }
    ],
    'US': [
      { platform: 'YouTube', baseUrl: 'https://www.youtube.com', searchUrl: 'https://www.youtube.com/results?search_query=' },
      { platform: 'SeriousEats', baseUrl: 'https://www.seriouseats.com', searchUrl: 'https://www.seriouseats.com/search?q=' },
      { platform: 'Allrecipes', baseUrl: 'https://www.allrecipes.com', searchUrl: 'https://www.allrecipes.com/search/?q=' }
    ],
    'default': [
      { platform: 'YouTube', baseUrl: 'https://www.youtube.com', searchUrl: 'https://www.youtube.com/results?search_query=' }
    ]
  };
  
  return linkMap[region as keyof typeof linkMap] || linkMap.default;
}

export function saveToLocalStorage(key: string, data: any): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
}