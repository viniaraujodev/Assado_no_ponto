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
  // --- ASSADOS ---
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

  // --- COMBOS ---
  {
    id: 'combo-familia',
    name: 'Combo Assado no Ponto',
    price: 85,
    category: 'combos',
    description: 'Frango inteiro + Guarnição Grande + Baré 2L',
    image: '', // Se tiver foto do combo, coloque aqui ex: '/combo.jpg'
    hasIncludes: true,
    includedItems: frangoIncludes,
  },

  // --- GUARNIÇÕES ---
  {
    id: 'vatapa-extra',
    name: 'Vatapá Extra',
    price: 5,
    category: 'guarnicoes',
    description: 'Porção extra de vatapá cremoso',
  },
  {
    id: 'feijao-tropeiro',
    name: 'Feijão Tropeiro',
    price: 10,
    category: 'guarnicoes',
    description: 'Feijão tropeiro tradicional',
  },
  {
    id: 'farofa-banana',
    name: 'Farofa de Banana',
    price: 10,
    category: 'guarnicoes',
    description: 'Farofa especial com banana',
  },
  {
    id: 'maionese',
    name: 'Maionese',
    price: 10,
    category: 'guarnicoes',
    description: 'Maionese de batata tradicional',
  },

  // --- REFEIÇÕES ---
  {
    id: 'quentinha-frango',
    name: 'Quentinha de Frango',
    price: 20,
    category: 'refeicoes',
    description: 'Refeição completa com frango e acompanhamentos',
  },

  // --- BEBIDAS ---
  {
    id: 'coca-2l',
    name: 'Coca-Cola 2L',
    price: 13,
    category: 'bebidas',
    description: 'Refrigerante Coca-Cola 2 litros',
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
