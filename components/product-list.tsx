'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { products, categoryNames } from '@/lib/data';
import { useCart } from '@/contexts/cart-context';
import { ProductCard } from './product-card';
import { AddonsModal } from './addons-modal';

interface ProductListProps {
  activeCategory: string;
}

// Certifique-se de que o 'export' está aqui!
export function ProductList({ activeCategory }: ProductListProps) {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const handleAddProduct = (product: Product) => {
    if (product.hasIncludes) {
      setSelectedProduct(product);
    } else {
      addItem(product, 1, [], []);
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4 pb-24">
      <div className="py-4">
        <h2 className="text-lg font-bold text-foreground mb-3">
          {categoryNames[activeCategory]}
        </h2>
        <div className="space-y-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={handleAddProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <AddonsModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
