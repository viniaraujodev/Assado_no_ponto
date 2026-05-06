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
    image: 'https://i.pinimg.com/originals/24/76/06/2476063991873919918739.jpg', 
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'frango-maquina',
    name: 'Frango de Máquina',
    price: 65,
    category: 'assados',
    description: 'Frango inteiro assado na máquina com acompanhamentos',
    image: 'https://blog.acimaq.com.br/wp-content/uploads/2014/05/como-vender-frango-assado.jpg',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'meio-frango',
    name: 'Meio Frango',
    price: 35,
    category: 'assados',
    description: 'Meio frango assado, perfeito para uma pessoa',
    image: 'https://media.istockphoto.com/id/139545187/pt/foto/meio-frango-assado.jpg?s=612x612&w=0&k=20&c=Z8Y2_y5y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y3y=',
    hasIncludes: true,
    includedItems: frangoIncludes,
  },
  {
    id: 'peixe-assado',
    name: 'Peixe Assado',
    price: 75,
    category: 'assados',
    description: 'Peixe fresco assado com temperos especiais',
    image: 'https://rondonia.ro.gov.br/wp-content/uploads/2019/08/Tambaqui-Assado.jpg',
    hasIncludes: true,
    includedItems: peixeIncludes,
  },
  {
    id: 'calabresa',
    name: 'Calabresa',
    price: 12,
    category: 'assados',
    description: 'Porção de calabresa assada na brasa',
    image: 'https://www.receitadevovo.com.br/static/img/receitas/linguica-calabresa-caramelizada.jpg',
  },
  // Bebidas (Exemplo com fotos genéricas até você mandar os links reais)
  {
    id: 'coca-2l',
    name: 'Coca-Cola 2L',
    price: 13,
    category: 'bebidas',
    description: 'Refrigerante Coca-Cola 2 litros',
    image: 'https://images.tcdn.com.br/img/img_prod/735741/refrigerante_coca_cola_2_litros_pet_unidade_1933_1_20200522103554.jpg',
  },
  {
    id: 'bare',
    name: 'Baré',
    price: 8,
    category: 'bebidas',
    description: 'Guaraná Baré gelado',
    image: 'https://cdn.awsli.com.br/600x450/162/162985/produto/54752454/330f8c5b16.jpg',
  }
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
  assados: 'Flame',
  combos: 'Gift',
  guarnicoes: 'Utensils',
  refeicoes: 'Beef',
  bebidas: 'CupSoap',
};
