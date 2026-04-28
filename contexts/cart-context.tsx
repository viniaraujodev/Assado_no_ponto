'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Product, Addon, CartItem, DeliveryZone, IncludedItem } from '@/lib/types';

interface CartContextType {
  items: CartItem[];
  deliveryZone: DeliveryZone | null;
  addItem: (product: Product, quantity: number, addons: Addon[], removedItems?: IncludedItem[]) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setDeliveryZone: (zone: DeliveryZone | null) => void;
  clearCart: () => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone | null>(null);

  const addItem = useCallback((product: Product, quantity: number, addons: Addon[], removedItems: IncludedItem[] = []) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          JSON.stringify(item.addons.map((a) => a.id).sort()) ===
            JSON.stringify(addons.map((a) => a.id).sort()) &&
          JSON.stringify(item.removedItems.map((r) => r.id).sort()) ===
            JSON.stringify(removedItems.map((r) => r.id).sort())
      );

      if (existingIndex > -1) {
        const newItems = [...prev];
        newItems[existingIndex].quantity += quantity;
        return newItems;
      }

      return [...prev, { product, quantity, addons, removedItems }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    setDeliveryZone(null);
  }, []);

  const subtotal = items.reduce((acc, item) => {
    const itemTotal = item.product.price * item.quantity;
    const addonsTotal = item.addons.reduce((sum, addon) => sum + addon.price, 0) * item.quantity;
    return acc + itemTotal + addonsTotal;
  }, 0);

  const deliveryFee = deliveryZone?.fee ?? 0;
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryZone,
        addItem,
        removeItem,
        updateQuantity,
        setDeliveryZone,
        clearCart,
        subtotal,
        deliveryFee,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
