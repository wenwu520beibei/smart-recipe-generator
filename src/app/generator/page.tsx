import RecipeGenerator from '@/components/RecipeGenerator';

export const metadata = {
  title: '菜谱生成器 - 智能菜谱生成器 | NeuraHorizon',
  description: '使用AI智能菜谱生成器，设置家庭成员偏好，选择用餐场景，一键生成营养均衡的周菜谱和购物清单。',
};

export default function GeneratorPage() {
  return <RecipeGenerator />;
}