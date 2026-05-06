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

  // Filtra os produtos com base na categoria selecionada nas abas
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const handleAddProduct = (product: Product) => {
    // Se o produto tiver acompanhamentos (frango/peixe), abre o modal
    if (product.hasIncludes) {
      setSelectedProduct(product);
    } else {
      // Se for item simples (bebida/guarnição), adiciona direto ao carrinho
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

      {/* Modal para escolha de acompanhamentos (Vatapá, Baião, etc) */}
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
