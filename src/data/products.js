/**
 * Catálogo — 12 peças.
 *
 * Nomes, preços, badges e o artesão de cada peça vêm dos cards da tela de
 * coleção (node 30:4277), conferidos contra a Home (30:3733) e a tela de
 * artesão (30:4928). Preços em CENTAVOS — ver src/lib/format.js.
 *
 * O que NÃO está no design e foi escrito para o mock:
 * - `description` de todas as peças, exceto Colar Prata Marina (texto real da
 *   tela de produto);
 * - `rating` e `reviewCount` de todas, exceto Colar Prata Marina (5 · 86);
 * - `category`, `material` e `region`, derivados do nome da peça e da cidade
 *   do artesão.
 */

const IMG = '?w=800&h=1000&fit=crop'
const u = (id) => `https://images.unsplash.com/photo-${id}${IMG}`

const products = [
  {
    id: 'vaso-areia-bruta',
    slug: 'vaso-areia-bruta',
    name: 'Vaso Areia Bruta',
    price: 38900,
    compareAtPrice: 46000,
    category: 'ceramica',
    material: 'Cerâmica',
    region: 'Nordeste',
    badge: 'edicao-limitada',
    artisanId: 'ana-vasconcellos',
    images: [u('1578749556568-bc2c40e68b61'), u('1565193566173-7a0ee3dbe261')],
    description:
      'Vaso torneado à mão em argila local, com superfície crua e irregular. Cada peça seca ao ar por vinte dias antes da queima a lenha.',
    rating: 5,
    reviewCount: 42,
  },
  {
    id: 'colar-prata-marina',
    slug: 'colar-prata-marina',
    name: 'Colar Prata Marina',
    price: 54000,
    compareAtPrice: null,
    category: 'joalheria',
    material: 'Prata 950',
    region: 'Nordeste',
    // No design este card não tem badge — ver nota no fim do arquivo.
    badge: null,
    artisanId: 'luiza-tavares',
    images: [u('1515562141207-7a88fb7ce338'), u('1599643478518-a784e5dc4c8f')],
    description:
      'Pingente de prata 950 fundido em molde de areia, cordão de algodão encerado.',
    rating: 5,
    reviewCount: 86,
  },
  {
    id: 'manta-tear-pampas',
    slug: 'manta-tear-pampas',
    name: 'Manta Tear Pampas',
    price: 128000,
    compareAtPrice: null,
    category: 'texteis',
    material: 'Lã merino',
    region: 'Sudeste',
    badge: 'novo',
    artisanId: 'rafael-coutinho',
    images: [u('1594938298603-c8148c4dae35'), u('1600166898405-da9535204843')],
    description:
      'Manta tecida em tear de pedal com lã merino tingida em banho natural. Acabamento com franja torcida à mão.',
    rating: 5,
    reviewCount: 18,
  },
  {
    id: 'tabua-imbuia-curva',
    slug: 'tabua-imbuia-curva',
    name: 'Tábua Imbuia Curva',
    price: 32000,
    compareAtPrice: null,
    category: 'madeira',
    material: 'Madeira',
    region: 'Sudeste',
    badge: null,
    artisanId: 'joao-meirelles',
    images: [u('1616486338812-3dadae4b4ace'), u('1503602642458-232111445657')],
    description:
      'Tábua de imbuia de demolição, curvada a plaina e finalizada com óleo vegetal. O desenho do veio muda em cada exemplar.',
    rating: 5,
    reviewCount: 27,
  },
  {
    id: 'conjunto-xicaras-fosco',
    slug: 'conjunto-xicaras-fosco',
    name: 'Conjunto Xícaras Fosco',
    price: 46000,
    compareAtPrice: 52000,
    category: 'ceramica',
    material: 'Cerâmica',
    region: 'Nordeste',
    badge: null,
    artisanId: 'ana-vasconcellos',
    images: [u('1610701596007-11502861dcfa'), u('1547480053-7d174f67b557')],
    description:
      'Conjunto de quatro xícaras com esmalte fosco por dentro e barro exposto por fora. Vão ao forno e à lava-louças.',
    rating: 5,
    reviewCount: 63,
  },
  {
    id: 'argolas-lua-cheia',
    slug: 'argolas-lua-cheia',
    name: 'Argolas Lua Cheia',
    price: 29000,
    compareAtPrice: null,
    category: 'joalheria',
    material: 'Prata 950',
    region: 'Nordeste',
    badge: 'best-seller',
    artisanId: 'luiza-tavares',
    images: [u('1611652022419-a9419f74343d'), u('1601121141461-9d6647bca1ed')],
    description:
      'Argolas de prata 950 com polimento parcial, que preserva a marca da fundição em areia. Leves, para uso diário.',
    rating: 5,
    reviewCount: 94,
  },
  {
    id: 'almofada-linho-cru',
    slug: 'almofada-linho-cru',
    name: 'Almofada Linho Cru',
    price: 24000,
    compareAtPrice: null,
    category: 'texteis',
    material: 'Linho',
    region: 'Sudeste',
    badge: null,
    artisanId: 'rafael-coutinho',
    images: [u('1586023492125-27b2c045efd7'), u('1556228453-efd6c1ff04f6')],
    description:
      'Capa de almofada em linho cru lavado, com costura francesa e fechamento em botão de madeira. Enchimento vendido à parte.',
    rating: 4,
    reviewCount: 31,
  },
  {
    id: 'banco-castanheira',
    slug: 'banco-castanheira',
    name: 'Banco Castanheira',
    price: 189000,
    compareAtPrice: null,
    category: 'madeira',
    material: 'Madeira',
    region: 'Sudeste',
    badge: 'sob-encomenda',
    artisanId: 'joao-meirelles',
    images: [u('1449247709967-d4461a6a6103'), u('1538688525198-9b88f6f53126')],
    description:
      'Banco baixo em castanheira de reflorestamento, com encaixes tradicionais e sem parafusos. Produzido sob encomenda em oito semanas.',
    rating: 5,
    reviewCount: 12,
  },
  {
    id: 'luminaria-papel-arroz',
    slug: 'luminaria-papel-arroz',
    name: 'Luminária Papel Arroz',
    price: 38000,
    compareAtPrice: null,
    category: 'decoracao',
    material: 'Madeira',
    region: 'Sudeste',
    badge: null,
    artisanId: 'joao-meirelles',
    images: [u('1513519245088-0e12902e5a38'), u('1526170375885-4d8ecf77b99f')],
    description:
      'Cúpula de papel arroz sobre estrutura de madeira clara. Difunde uma luz quente e uniforme, indicada para mesa de canto.',
    rating: 4,
    reviewCount: 22,
  },
  {
    id: 'caderno-couro-vegetal',
    slug: 'caderno-couro-vegetal',
    name: 'Caderno Couro Vegetal',
    price: 18000,
    compareAtPrice: null,
    category: 'papelaria',
    material: 'Couro vegetal',
    region: 'Nordeste',
    badge: null,
    artisanId: 'luiza-tavares',
    images: [u('1531346878377-a5be20888e57'), u('1517705008128-361805f42e86')],
    description:
      'Caderno de costura copta com capa em couro de curtimento vegetal e miolo de papel reciclado 120g. Abre totalmente plano.',
    rating: 5,
    reviewCount: 47,
  },
  {
    id: 'espelho-juta',
    slug: 'espelho-juta',
    name: 'Espelho Juta',
    price: 69000,
    compareAtPrice: null,
    category: 'decoracao',
    material: 'Juta',
    region: 'Sudeste',
    badge: null,
    artisanId: 'rafael-coutinho',
    images: [u('1544816155-12df9643f363'), u('1524758631624-e2822e304c36')],
    description:
      'Espelho redondo emoldurado em corda de juta trançada à mão. Acompanha alça para pendurar e ferragem embutida.',
    rating: 5,
    reviewCount: 16,
  },
  {
    id: 'jarra-terracota',
    slug: 'jarra-terracota',
    name: 'Jarra Terracota',
    price: 42000,
    compareAtPrice: null,
    category: 'ceramica',
    material: 'Cerâmica',
    region: 'Nordeste',
    badge: null,
    artisanId: 'ana-vasconcellos',
    images: [u('1522204523234-8729aa6e3d5f'), u('1584589167171-541ce45f1eea')],
    description:
      'Jarra de terracota não esmaltada, com bico modelado à mão. A porosidade do barro mantém a água naturalmente fresca.',
    rating: 5,
    reviewCount: 38,
  },
]

/**
 * NOTA — duas divergências entre o briefing e o design (o design foi seguido):
 *
 * 1. Badge "novo": no briefing aparece em Colar Prata Marina, mas nos três
 *    lugares em que os cards aparecem no Figma (coleção, Home e "você também
 *    pode gostar") o selo "Novo" está em Manta Tear Pampas.
 * 2. Conjunto Xícaras Fosco: o briefing diz R$ 520, mas o design mostra
 *    R$ 460 com R$ 520 riscado — mesma estrutura do Vaso Areia Bruta
 *    (R$ 389 / R$ 460). Ficou price 46000 + compareAtPrice 52000.
 *
 * Para inverter, basta mover `badge: 'novo'` e trocar os dois campos de preço.
 */
export default products
