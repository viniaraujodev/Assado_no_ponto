'use client';

import { Plus } from 'lucide-react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

// Mapa de emojis original baseado no ID do produto
const productEmojis: Record<string, string> = {
  'frango-brasa': '🍗',
  'frango-maquina': '🍗',
  'meio-frango': '🍗',
  'peixe-assado': '🐟',
  'calabresa': '🌭',
  'combo-frango-bare': '🎁',
  'combo-peixe-bare': '🎁',
  'vatapa-extra': '🍛',
  'vinagrete-extra': '🥗',
  'farofa-banana': '🍌',
  'arroz-extra': '🍚',
  'macarrao-extra': '🍝',
  'quentinha-frango': '🍱',
  'quentinha-peixe': '🍱',
  'coca-2l': '🥤',
  'bare': '🥤',
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className="flex items-center gap-3 p-3 transition-shadow hover:shadow-md">
      {/* Container do ícone (Emoji) */}
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-3xl">
        {productEmojis[product.id] || '🍽️'}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-card-foreground truncate">{product.name}</h3>
        {product.description && (
          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
            {product.description}
          </p>
        )}
        <p className="mt-1 font-bold text-primary">{formatPrice(product.price)}</p>
      </div>

      <Button
        size="icon"
        className="h-10 w-10 rounded-full flex-shrink-0"
        onClick={() => onAdd(product)}
      >
        <Plus className="h-5 w-5" />
        <span className="sr-only">Adicionar {product.name}</span>
      </Button>
    </Card>
  );
}
