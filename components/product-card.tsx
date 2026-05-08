'use client';

import { Plus } from 'lucide-react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className="flex items-center gap-4 p-4 transition-all hover:shadow-md border-slate-100 bg-white shadow-sm">
      {/* Container da Imagem */}
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 overflow-hidden border border-slate-100">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover"
            onError={(e) => {
              // Se a imagem falhar (nome errado ou extensão errada), mostra o emoji
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<span class="text-3xl">🍽️</span>';
            }}
          />
        ) : (
          <span className="text-3xl">🍽️</span>
        )}
      </div>

      {/* Conteúdo de Texto alinhado à esquerda */}
      <div className="flex-1 min-w-0 text-left">
        <h3 className="font-bold text-slate-900 text-base leading-tight truncate">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-medium leading-relaxed">
            {product.description}
          </p>
        )}
        <p className="mt-2 font-black text-red-600 text-lg leading-none">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Botão de Adicionar */}
      <Button
        size="icon"
        className="h-11 w-11 rounded-2xl bg-red-600 hover:bg-red-700 shadow-sm flex-shrink-0"
        onClick={() => onAdd(product)}
      >
        <Plus className="h-6 w-6 text-white" />
      </Button>
    </Card>
  );
}
