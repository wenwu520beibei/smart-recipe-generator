export interface Person {
  id: string;
  name: string;
  age: number;
  relationship: string;
  portionMultiplier: number;
  hardConstraints: {
    allergies: string[];
    dietary: string[];
    medical: string[];
    personal: string[];
  };
  softConstraints: {
    spiceLevel: number;
    cuisinePreferences: string[];
    cookingTime: number;
    budgetRange: string;
  };
}

export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  cookingTime: number;
  difficulty: string;
  servings: number;
  calories: number;
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  videoLinks: VideoLink[];
  rating?: number;
  isFavorite?: boolean;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  category: string;
}

export interface VideoLink {
  platform: string;
  url: string;
  duration: number;
  rating: number;
  language: string;
}

export interface MealPlan {
  id: string;
  date: string;
  meals: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  };
  totalCalories: number;
  totalMacros: {
    carbs: number;
    protein: number;
    fat: number;
  };
}

export interface WeeklyPlan {
  id: string;
  startDate: string;
  endDate: string;
  dailyPlans: MealPlan[];
  shoppingList: ShoppingItem[];
}

export interface ShoppingItem {
  name: string;
  amount: number;
  unit: string;
  category: string;
  price?: number;
  checked?: boolean;
}

export interface UserPreferences {
  persons: Person[];
  defaultScenario: string;
  region: string;
  language: string;
  nutritionGoals: {
    calorieTarget: number;
    macroTargets: {
      carbs: number;
      protein: number;
      fat: number;
    };
  };
  avoidRecentMeals: boolean;
  diversityWeight: number;
}