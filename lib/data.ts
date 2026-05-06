import { Product, DeliveryZone, IncludedItem } from './types';

export const frangoIncludes: IncludedItem[] = [
  { id: 'vatapa', name: 'Vatapá' },
  { id: 'macarrao', name: 'Macarrão' },
  { id: 'baiao', name: 'Baião' },
  { id: 'farofa', name: 'Farofa' },
];

export const peixeIncludes: IncludedItem[] = [
  { id: 'baiao', name: 'Baião' },
  { id: 'vinagrete', name: 'Vinagrete' },
  { id: 'limao', name: 'Limão' },
  { id: 'farofa', name: 'Farofa' },
];

export const products: Product[] = [
  {
    id: 'frango-brasa',
    name: 'Frango na Brasa',
    price: 65,
    category: 'assados',
    description: 'Frango inteiro assado na brasa com acompanhamentos',
    image: '', 
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'peixe-assado',
    name: 'Peixe Assado',
    price: 75,
    category: 'assados',
    description: 'Peixe fresco assado com temperos especiais',
    image: '',
    hasIncludes: true,
    includedItems: peixeIncludes,
  },
  {
    id: 'vatapa-extra',
    name: 'Vatapá Extra',
    price: 5,
    category: 'guarnicoes', // Certifique-se que está no plural como na aba
    description: 'Porção extra de vatapá cremoso',
  },
  {
    id: 'bare',
    name: 'Baré',
    price: 8,
    category: 'bebidas',
    description: 'Guaraná Baré gelado',
  },
];

export const deliveryZones: DeliveryZone[] = [
  { name: 'Ajuricaba', fee: 6 },
  { name: 'Planalto', fee: 6 },
  { name: 'Flores', fee: 12 },
  { name: 'Tarumã', fee: 18 },
];

export const categoryNames: Record<string, string> = {
  assados: 'Assados',
  combos: 'Combos',
  guarnicoes: 'Guarnições',
  refeicoes: 'Refeições',
  bebidas: 'Bebidas',
};

// Deixe as strings de ícones vazias por enquanto para não bugar o texto
export const categoryIcons: Record<string, string> = {
  assados: '',
  combos: '',
  guarnicoes: '',
  refeicoes: '',
  bebidas: '',
};
