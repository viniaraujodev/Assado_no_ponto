'use client';

import { useState } from 'react';
import { CartProvider } from '@/contexts/cart-context';
import { Header } from '@/components/header';
import { CategoryTabs } from '@/components/category-tabs';
import { ProductList } from '@/components/product-list';
import { FloatingCart } from '@/components/floating-cart';
import { CartDrawer } from '@/components/cart-drawer';
import { CheckoutModal } from '@/components/checkout-modal';

function DeliveryApp() {
  const [activeCategory, setActiveCategory] = useState('assados');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProductList activeCategory={activeCategory} />
      <FloatingCart onOpenCart={() => setIsCartOpen(true)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleOpenCheckout}
      />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </main>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <DeliveryApp />
    </CartProvider>
  );
}
