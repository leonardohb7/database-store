/**
 * Artesãos — cidade, estado, ofício e contagem de peças vêm da seção
 * "Artesãos em destaque" da Home (Figma orRCcuky3uxh77CSrRRG1j).
 *
 * Sobre os textos:
 * - Ana Vasconcellos: bio e longBio são o conteúdo real de "Sobre o atelier"
 *   na tela de artesão (node 30:4928).
 * - Luiza Tavares: a bio é o texto real do bloco "Artesão" na tela de produto.
 * - João Meirelles e Rafael Coutinho não têm texto no design; as biografias
 *   deles foram escritas para o mock, seguindo o tom das outras.
 */

const COVER = '?w=1600&h=900&fit=crop'
const AVATAR = '?w=200&h=200&fit=crop'

const artisans = [
  {
    id: 'ana-vasconcellos',
    slug: 'ana-vasconcellos',
    name: 'Ana Vasconcellos',
    city: 'Olinda',
    state: 'PE',
    craft: 'Cerâmica utilitária',
    pieceCount: 24,
    bio: 'Há quinze anos modelando barro branco em peças que celebram o cotidiano. Cada vaso passa por trinta dias de secagem natural antes da queima a lenha.',
    longBio:
      'Há quinze anos modelando barro branco em peças que celebram o cotidiano. Cada vaso passa por trinta dias de secagem natural antes da queima a lenha.\n\nTrabalhamos com tempo lento. Cada peça é planejada, esboçada e produzida em série muito limitada — entre cinco e quinze exemplares por modelo. O resultado nunca é perfeitamente igual, e essa é a intenção.',
    coverImage: `https://images.unsplash.com/photo-1493106641515-6b5631de4bb9${COVER}`,
    avatar: `https://images.unsplash.com/photo-1494790108377-be9c29b29330${AVATAR}`,
  },
  {
    id: 'joao-meirelles',
    slug: 'joao-meirelles',
    name: 'João Meirelles',
    city: 'Tiradentes',
    state: 'MG',
    craft: 'Marcenaria',
    pieceCount: 18,
    bio: 'Marcenaria de madeira de demolição e reflorestamento, com encaixes tradicionais e acabamento em óleo vegetal.',
    longBio:
      'Marcenaria de madeira de demolição e reflorestamento, com encaixes tradicionais e acabamento em óleo vegetal.\n\nCada peça começa na escolha da tábua: o desenho do veio decide a forma final. Nada é laminado, nada leva verniz sintético. As curvas são feitas a plaina e lixadas à mão, o que leva dias — mas é o que dá a superfície que se sente antes de ver.',
    coverImage: `https://images.unsplash.com/photo-1533090161767-e6ffed986c88${COVER}`,
    avatar: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e${AVATAR}`,
  },
  {
    id: 'luiza-tavares',
    slug: 'luiza-tavares',
    name: 'Luiza Tavares',
    city: 'Salvador',
    state: 'BA',
    craft: 'Joalheria',
    pieceCount: 32,
    bio: 'Joalheria contemporânea em prata 950 fundida à mão, inspirada nas formas do litoral baiano.',
    longBio:
      'Joalheria contemporânea em prata 950 fundida à mão, inspirada nas formas do litoral baiano.\n\nO processo começa na areia: os moldes são abertos um a um e se desfazem depois de cada fundição, então duas peças nunca saem idênticas. O polimento é parcial de propósito, para que a marca da fundição continue visível na superfície.',
    coverImage: `https://images.unsplash.com/photo-1611652022419-a9419f74343d${COVER}`,
    avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb${AVATAR}`,
  },
  {
    id: 'rafael-coutinho',
    slug: 'rafael-coutinho',
    name: 'Rafael Coutinho',
    city: 'São Paulo',
    state: 'SP',
    craft: 'Têxteis',
    pieceCount: 15,
    bio: 'Tecelagem manual em tear de pedal, com lã merino e linho tingidos em banho natural.',
    longBio:
      'Tecelagem manual em tear de pedal, com lã merino e linho tingidos em banho natural.\n\nOs fios vêm de pequenos produtores do sul do país e são tingidos no próprio ateliê, com cascas, folhas e raízes. Como o banho natural varia a cada lote, as cores mudam de uma edição para a outra — o catálogo mostra sempre a peça mais recente.',
    coverImage: `https://images.unsplash.com/photo-1550684848-fac1c5b4e853${COVER}`,
    avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d${AVATAR}`,
  },
]

const porId = new Map(artisans.map((artisan) => [artisan.id, artisan]))
const porSlug = new Map(artisans.map((artisan) => [artisan.slug, artisan]))

/**
 * Busca um artesão pelo slug da rota /artesao/:slug.
 *
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getArtisanBySlug(slug) {
  return porSlug.get(slug)
}

/**
 * Busca um artesão pelo id usado em `product.artisanId`.
 *
 * @param {string} id
 * @returns {object|undefined}
 */
export function getArtisanById(id) {
  return porId.get(id)
}

export default artisans
