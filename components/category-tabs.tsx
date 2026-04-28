'use client';

import { cn } from '@/lib/utils';
import { categoryNames, categoryIcons } from '@/lib/data';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['assados', 'combos', 'guarnicoes', 'refeicoes', 'bebidas'];

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="sticky top-[60px] z-30 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-lg px-4 py-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                'flex-shrink-0 flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-card-foreground hover:bg-muted border border-border'
              )}
            >
              <span>{categoryIcons[category]}</span>
              <span>{categoryNames[category]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
