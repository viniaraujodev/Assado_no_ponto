'use client';

import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';

interface FloatingCartProps {
  onOpenCart: () => void;
}

export function FloatingCart({ onOpenCart }: FloatingCartProps) {
  const { itemCount, subtotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-safe">
      <div className="mx-auto max-w-lg">
        <Button
          onClick={onOpenCart}
          className="w-full h-14 rounded-2xl shadow-lg flex items-center justify-between px-4 text-base"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground text-[10px] font-bold text-primary">
                {itemCount}
              </span>
            </div>
            <span className="font-semibold">Ver sacola</span>
          </div>
          <span className="font-bold">{formatPrice(subtotal)}</span>
        </Button>
      </div>
    </div>
  );
}
