import { Product, DeliveryZone, IncludedItem } from './types';

// Itens inclusos para frangos (Vatapá, Macarrão, Baião, Farofa)
export const frangoIncludes: IncludedItem[] = [
  { id: 'vatapa', name: 'Vatapá' },
  { id: 'macarrao', name: 'Macarrão' },
  { id: 'baiao', name: 'Baião' },
  { id: 'farofa', name: 'Farofa' },
];

// Itens inclusos para peixe (Baião, Vinagrete, Limão, Farofa)
export const peixeIncludes: IncludedItem[] = [
  { id: 'baiao', name: 'Baião' },
  { id: 'vinagrete', name: 'Vinagrete' },
  { id: 'limao', name: 'Limão' },
  { id: 'farofa', name: 'Farofa' },
];

export const products: Product[] = [
  // Assados
  {
    id: 'frango-brasa',
    name: 'Frango na Brasa',
    price: 65,
    category: 'assados',
    description: 'Frango inteiro assado na brasa com acompanhamentos',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'frango-maquina',
    name: 'Frango de Máquina',
    price: 65,
    category: 'assados',
    description: 'Frango inteiro assado na máquina com acompanhamentos',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'meio-frango',
    name: 'Meio Frango',
    price: 35,
    category: 'assados',
    description: 'Meio frango assado, perfeito para uma pessoa',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'peixe-assado',
    name: 'Peixe Assado',
    price: 75,
    category: 'assados',
    description: 'Peixe fresco assado com temperos especiais',
    hasIncludes: true,
    includedItems: peixeIncludes,
  },
  {
    id: 'calabresa',
    name: 'Calabresa',
    price: 12,
    category: 'assados',
    description: 'Porção de calabresa assada na brasa',
  },
  // Combos
  {
    id: 'combo-frango-bare',
    name: 'Combo Frango + Baré 1L',
    price: 70,
    category: 'combos',
    description: 'Frango completo + Guaraná Baré 1L',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'combo-peixe-bare',
    name: 'Combo Peixe + Baré 1L',
    price: 80,
    category: 'combos',
    description: 'Peixe completo + Guaraná Baré 1L',
    hasIncludes: true,
    includedItems: peixeIncludes,
  },
  // Guarnicoes (Extras para venda separada)
  {
    id: 'vatapa-extra',
    name: 'Vatapá Extra',
    price: 5,
    category: 'guarnicoes',
    description: 'Porcao extra de vatapa cremoso',
  },
  {
    id: 'vinagrete-extra',
    name: 'Vinagrete Extra',
    price: 5,
    category: 'guarnicoes',
    description: 'Porcao extra de vinagrete fresco',
  },
  {
    id: 'maionese-extra',
    name: 'Maionese',
    price: 10,
    category: 'guarnicoes',
    description: 'Porcao de maionese caseira',
  },
  {
    id: 'feijao-tropeiro',
    name: 'Feijao Tropeiro',
    price: 10,
    category: 'guarnicoes',
    description: 'Feijao tropeiro tradicional',
  },
  {
    id: 'farofa-banana',
    name: 'Farofa de Banana',
    price: 10,
    category: 'guarnicoes',
    description: 'Farofa especial com banana',
  },
  {
    id: 'macaxeira-frita',
    name: 'Macaxeira Frita',
    price: 10,
    category: 'guarnicoes',
    description: 'Porcao de macaxeira frita crocante',
  },
  {
    id: 'banana-frita',
    name: 'Banana Frita',
    price: 10,
    category: 'guarnicoes',
    description: 'Porcao de banana frita',
  },
  {
    id: 'farofa-calabresa',
    name: 'Farofa de Calabresa',
    price: 10,
    category: 'guarnicoes',
    description: 'Farofa com pedacos de calabresa',
  },
  {
    id: 'arroz-extra',
    name: 'Arroz',
    price: 10,
    category: 'guarnicoes',
    description: 'Porcao extra de arroz',
  },
  {
    id: 'baiao-extra',
    name: 'Baiao',
    price: 10,
    category: 'guarnicoes',
    description: 'Porcao de baiao de dois',
  },
  // Refeições
  {
    id: 'quentinha-frango',
    name: 'Quentinha de Frango',
    price: 20,
    category: 'refeicoes',
    description: 'Refeição completa com frango, arroz e acompanhamentos',
  },
  {
    id: 'quentinha-peixe',
    name: 'Quentinha de Peixe',
    price: 20,
    category: 'refeicoes',
    description: 'Refeição completa com peixe, arroz e acompanhamentos',
  },
  // Bebidas
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
  { name: 'Ajuricaba', fee: 5 },
  { name: 'Planalto', fee: 5 },
  { name: 'Redenção', fee: 6 },
  { name: 'Versalhes', fee: 6 },
  { name: 'Bairro da Paz', fee: 7 },
  { name: 'Alvorada', fee: 8 },
  { name: 'Lírio do Vale', fee: 8 },
  { name: 'Nova Esperança', fee: 9 },
  { name: 'Dom Pedro', fee: 10 },
  { name: 'Djalma Batista', fee: 13 },
  { name: 'Constantino Nery', fee: 13 },
  { name: 'Glória', fee: 15 },
  { name: 'São Raimundo', fee: 15 },
  { name: 'São Jorge', fee: 15 },
  { name: 'Compensa', fee: 15 },
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
  assados: '🍗',
  combos: '🎁',
  guarnicoes: '🍚',
  refeicoes: '🍱',
  bebidas: '🥤',
};
