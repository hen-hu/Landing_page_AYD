import React from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Shirt, 
  Utensils, 
  Sparkles, 
  Flame, 
  Zap 
} from 'lucide-react';
import { CATEGORIES } from '../data/catalogData';

interface CategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 shrink-0" />;
      case 'Shirt': return <Shirt className="w-4 h-4 shrink-0" />;
      case 'Utensils': return <Utensils className="w-4 h-4 shrink-0" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 shrink-0" />;
      case 'Flame': return <Flame className="w-4 h-4 shrink-0" />;
      case 'Zap': return <Zap className="w-4 h-4 shrink-0" />;
      default: return <Layers className="w-4 h-4 shrink-0" />;
    }
  };

  return (
    <div className="w-full overflow-x-auto py-2 border-b border-slate-200 bg-white no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 min-w-max">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span className={isSelected ? 'text-emerald-400' : 'text-slate-600'}>
                {getIcon(cat.icon)}
              </span>
              <span>{cat.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                isSelected ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
