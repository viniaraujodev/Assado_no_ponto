'use client';

import { Plus } from 'lucide-react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

const productEmojis: Record<string, string> = {
  'frango-brasa': '🍗', 'frango-maquina': '🍗', 'meio-frango': '🍗',
  'peixe-assado': '🐟', 'calabresa': '🌭', 'vatapa-extra': '🍛',
  'feijao-tropeiro': '🍲', 'farofa-banana': '🍌', 'quentinha-frango': '🍱',
  'coca-2l': '🥤', 'bare': '🥤',
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className="flex items-center gap-4 p-4 transition-all hover:shadow-md border-slate-100">
      {/* Imagem/Emoji SEMPRE na esquerda */}
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-4xl shadow-inner">
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          productEmojis[product.id] || '🍽️'
        )}
      </div>

      {/* Textos alinhados à esquerda */}
      <div className="flex-1 min-w-0 text-left">
        <h3 className="font-bold text-slate-800 text-base leading-tight truncate">{product.name}</h3>
        {product.description && (
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-medium">
            {product.description}
          </p>
        )}
        <p className="mt-2 font-black text-red-600 text-lg leading-none">{formatPrice(product.price)}</p>
      </div>

      {/* Botão de adicionar na direita */}
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
