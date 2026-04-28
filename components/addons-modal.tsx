'use client';

import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { Product, IncludedItem } from '@/lib/types';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface AddonsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function AddonsModal({ product, isOpen, onClose }: AddonsModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [removedItems, setRemovedItems] = useState<IncludedItem[]>([]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const toggleRemovedItem = (item: IncludedItem) => {
    setRemovedItems((prev) =>
      prev.find((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  const itemTotal = product.price * quantity;

  const handleAddToCart = () => {
    addItem(product, quantity, [], removedItems);
    setQuantity(1);
    setRemovedItems([]);
    onClose();
  };

  if (!isOpen) return null;

  const includedItems = product.includedItems || [];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Fechar modal"
      />
      <div className="relative w-full max-w-lg animate-in slide-in-from-bottom duration-300 rounded-t-3xl bg-card shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card p-4 rounded-t-3xl">
          <h2 className="text-lg font-bold text-card-foreground">{product.name}</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <p className="mt-2 text-xl font-bold text-primary">{formatPrice(product.price)}</p>
          </div>

          {includedItems.length > 0 && (
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Acompanhamentos inclusos
                </h3>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Grátis
                </span>
              </div>
              <p className="mb-3 text-xs text-muted-foreground">
                Marque os itens que deseja <span className="font-semibold text-primary">remover</span> do seu pedido
              </p>
              <div className="space-y-2">
                {includedItems.map((item) => {
                  const isRemoved = removedItems.some((i) => i.id === item.id);
                  return (
                    <label
                      key={item.id}
                      className={cn(
                        'flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all',
                        isRemoved
                          ? 'border-primary/50 bg-primary/5'
                          : 'border-border bg-card hover:border-muted-foreground/30'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={isRemoved}
                          onCheckedChange={() => toggleRemovedItem(item)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <span className={cn(
                          "font-medium",
                          isRemoved ? "text-muted-foreground line-through" : "text-card-foreground"
                        )}>
                          {item.name}
                        </span>
                      </div>
                      {!isRemoved && (
                        <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                          <Check className="h-3 w-3" />
                          Incluso
                        </span>
                      )}
                      {isRemoved && (
                        <span className="text-xs font-medium text-primary">
                          Remover
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Quantidade
            </h3>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition-colors disabled:opacity-50"
                disabled={quantity <= 1}
                aria-label="Diminuir quantidade"
              >
                <Minus className="h-5 w-5" />
              </button>
              <span className="w-12 text-center text-xl font-bold text-card-foreground">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 border-t border-border bg-card p-4 safe-area-inset-bottom">
          <Button
            onClick={handleAddToCart}
            className="w-full h-12 text-base font-semibold gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            Adicionar {formatPrice(itemTotal)}
          </Button>
        </div>
      </div>
    </div>
  );
}
