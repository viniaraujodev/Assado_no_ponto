export interface IncludedItem {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'assados' | 'combos' | 'guarnicoes' | 'refeicoes' | 'bebidas';
  description?: string;
  image?: string;
  hasIncludes?: boolean;
  includedItems?: IncludedItem[];
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  addons: Addon[];
  removedItems: IncludedItem[];
}

export interface DeliveryZone {
  name: string;
  fee: number;
}

export interface CheckoutData {
  name: string;
  address: string;
  reference: string;
  neighborhood: string;
  paymentMethod: 'pix' | 'cartao' | 'dinheiro';
}
