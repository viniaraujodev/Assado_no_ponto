import { Product, DeliveryZone, IncludedItem } from './types';
// O número da loja para o WhatsApp
export const STORE_PHONE = '5592992212466';

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
    id: 'meio-frango-maquina',
    name: 'Meio Frango de Máquina',
    price: 35,
    category: 'assados',
    description: 'Meio frango de máquina com acompanhamentos',
    image: 'meio-frango-assado.avif', 
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
    id: 'combo-frango-bare',
    name: 'Frango + Baré',
    price: 70,
    category: 'combos',
    description: 'Frango assado + acompanhamentos + Baré 2L',
    image: '/combo1.jpeg',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'combo-tambaqui-bare',
    name: 'Tambaqui + Baré',
    price: 80,
    category: 'combos',
    description: 'Tambaqui assado + acompanhamentos + Baré 2L',
    image: '', 
    hasIncludes: true,
    includedItems: peixeIncludes,
  },

  // --- GUARNIÇÕES ---
  { id: 'baiao', name: 'Baião', price: 10, category: 'guarnicoes', image: '/baiao.jpeg', description: 'Porção de baião de dois' },
  { id: 'farofa-calabresa', name: 'Farofa de Calabresa', price: 10, category: 'guarnicoes', image: '/farofacalabresa.jpeg', description: 'Farofa crocante com calabresa' },
  { id: 'banana-frita', name: 'Banana Frita', price: 10, category: 'guarnicoes', image: '/faforadebana.jpeg', description: 'Porção de banana frita' },
  { id: 'arroz-branco', name: 'Arroz Branco', price: 10, category: 'guarnicoes', image: '/arroz.jpeg', description: 'Porção de arroz branco' },
  { id: 'macaxeira', name: 'Macacheira', price: 10, category: 'guarnicoes', description: 'Macacheira cozida ou frita' },
  { id: 'maionese', name: 'Maionese', price: 10, category: 'guarnicoes', image: '/maionese.jpeg', description: 'Maionese de batata da casa' },
  { id: 'vatapa-extra', name: 'Vatapá Extra', price: 10, category: 'guarnicoes', description: 'Vatapá cremoso adicional' },
  { id: 'feijao-tropeiro', name: 'Feijão Tropeiro', price: 10, category: 'guarnicoes', description: 'Feijão tropeiro tradicional' },

  // --- REFEIÇÕES ---
  {
    id: 'quentinha-frango',
    name: 'Quentinha de Frango',
    price: 20,
    category: 'refeicoes',
    image: '/marmitafrango.avif',
    description: 'Refeição individual com frango assado',
  },
  {
    id: 'quentinha-tambaqui',
    name: 'Quentinha de Tambaqui',
    price: 25,
    category: 'refeicoes',
    description: 'Refeição individual de tambaqui assado',
  },
  {
    id: 'quentinha-misto',
    name: 'Quentinha Misto (Frango e Calabresa)',
    price: 20,
    category: 'refeicoes',
    description: 'Refeição individual com frango e calabresa',
  },

  // --- BEBIDAS ---
  { id: 'coca-2l', name: 'Coca-Cola 2L', price: 13, category: 'bebidas', description: 'Gelada' },
  { id: 'bare', name: 'Baré 2L', price: 8, category: 'bebidas', image: '/bare.avif', description: 'Gelado' },
];

export const deliveryZones: DeliveryZone[] = [
  { name: 'Ajuricaba', fee: 6 }, { name: 'Planalto', fee: 6 }, { name: 'Redenção', fee: 6 },
  { name: 'Versalhes', fee: 6 }, { name: 'Bairro da Paz', fee: 7 }, { name: 'Alvorada', fee: 8 },
  { name: 'Lírio do Vale', fee: 8 }, { name: 'Nova Esperança', fee: 9 }, { name: 'Dom Pedro', fee: 10 },
  { name: 'Flores', fee: 12 }, { name: 'Djalma Batista', fee: 13 }, { name: 'Constantino Nery', fee: 13 },
  { name: 'Glória', fee: 15 }, { name: 'São Raimundo', fee: 15 }, { name: 'São Jorge', fee: 15 },
  { name: 'Compensa', fee: 15 }, { name: 'Tarumã', fee: 18 }, { name: 'São Francisco', fee: 20 },
  { name: 'Petrópolis', fee: 20 }, { name: 'Educandos', fee: 20 },
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
