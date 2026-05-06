'use client';

import { Plus } from 'lucide-react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

// Mapeamento de emojis para garantir que apareçam corretamente
const productEmojis: Record<string, string> = {
  'frango-brasa': '🍗',
  'frango-maquina': '🍗',
  'meio-frango': '🍗',
  'peixe-assado': '🐟',
  'calabresa': '🌭',
  'vatapa-extra': '🍛',
  'feijao-tropeiro': '🍲',
  'farofa-banana': '🍌',
  'quentinha-frango': '🍱',
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
    <Card className="flex items-center gap-4 p-4 transition-shadow hover:shadow-md">
      {/* Container da Imagem ou Emoji na Esquerda */}
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-4xl overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          productEmojis[product.id] || '🍽️'
        )}
      </div>

      {/* Informações no Centro */}
      <div className="flex-1 min-w-0 text-left">
        <h3 className="font-bold text-lg text-foreground truncate">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {product.description}
          </p>
        )}
        <p className="mt-1 font-bold text-red-600 text-lg">{formatPrice(product.price)}</p>
      </div>

      {/* Botão na Direita */}
      <Button
        size="icon"
        className="h-10 w-10 rounded-full flex-shrink-0 bg-red-600 hover:bg-red-700"
        onClick={() => onAdd(product)}
      >
        <Plus className="h-6 w-6 text-white" />
        <span className="sr-only">Adicionar</span>
      </Button>
    </Card>
  );
}
