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
    // mx-auto centraliza o bloco e max-w-md impede que os cards estiquem demais
    <div className="mx-auto max-w-md px-4 pb-24 min-h-screen">
      <div className="py-6">
        <h2 className="text-xl font-black text-slate-900 mb-4 text-left border-l-4 border-red-600 pl-3">
          {categoryNames[activeCategory]}
        </h2>
        
        {filteredProducts.length > 0 ? (
          <div className="flex flex-col gap-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handleAddProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400">
            <p>Nenhum item nesta categoria ainda.</p>
          </div>
        )}
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
