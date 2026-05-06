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
    image: '/assadodebrasa.jpg', 
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'frango-maquina',
    name: 'Frango de Máquina',
    price: 65,
    category: 'assados',
    description: 'Frango inteiro assado na máquina com acompanhamentos',
    image: '/frangodemaquina.jpg',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'peixe-assado',
    name: 'Peixe Assado (Tambaqui)',
    price: 75,
    category: 'assados',
    description: 'Tambaqui fresco assado com temperos especiais',
    image: '/tambaqui.jpg',
    hasIncludes: true,
    includedItems: peixeIncludes,
  },
  {
    id: 'calabresa',
    name: 'Calabresa',
    price: 12,
    category: 'assados',
    description: 'Porção de calabresa assada na brasa',
    image: '/calabresa.jpg',
  },
  {
    id: 'bare',
    name: 'Baré',
    price: 8,
    category: 'bebidas',
    description: 'Guaraná Baré gelado',
    image: '', 
  },
];

// TODAS AS TAXAS DE ENTREGA INCLUÍDAS
export const deliveryZones: DeliveryZone[] = [
  { name: 'Ajuricaba', fee: 6 },
  { name: 'Planalto', fee: 6 },
  { name: 'Redenção', fee: 6 },
  { name: 'Versalhes', fee: 6 },
  { name: 'Bairro da Paz', fee: 7 },
  { name: 'Alvorada', fee: 8 },
  { name: 'Lírio do Vale', fee: 8 },
  { name: 'Nova Esperança', fee: 9 },
  { name: 'Dom Pedro', fee: 10 },
  { name: 'Flores', fee: 12 },
  { name: 'Djalma Batista', fee: 13 },
  { name: 'Constantino Nery', fee: 13 },
  { name: 'Glória', fee: 15 },
  { name: 'São Raimundo', fee: 15 },
  { name: 'São Jorge', fee: 15 },
  { name: 'Compensa', fee: 15 },
  { name: 'Tarumã', fee: 18 },
  { name: 'São Francisco', fee: 20 },
  { name: 'Petrópolis', fee: 20 },
  { name: 'Educandos', fee: 20 },
];

export const categoryNames: Record<string, string> = {
  assados: 'Assados',
  combos: 'Combos',
  guarnicoes: 'Guarnições',
  refeicoes: 'Refeições',
  bebidas: 'Bebidas',
};

export const categoryIcons: Record<string, string> = {
  assados: '', combos: '', guarnicoes: '', refeicoes: '', bebidas: '',
};
