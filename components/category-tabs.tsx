'use client';

import { categoryNames } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  // Pegamos apenas as chaves (assados, combos, etc) para criar as abas
  const categories = Object.keys(categoryNames);

  return (
    <div className="sticky top-14 z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-2 p-4">
          {categories.map((id) => (
            <button
              key={id}
              onClick={() => onCategoryChange(id)}
              className={cn(
                "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === id
                  ? "bg-red-600 text-white shadow-sm" // Cor vermelha do Assado no Ponto
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {/* Mostra apenas o nome bonito: Assados, Combos, etc */}
              {categoryNames[id]}
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
