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
    <Card className="flex items-center gap-3 p-3 transition-shadow hover:shadow-md">
      {/* ESPAÇO DA IMAGEM: Agora verifica se existe foto, se não, mostra o fundo cinza */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform hover:scale-110"
          />
        ) : (
          <span className="text-3xl">🍽️</span>
        )}
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
