/**
 * Mock da conta mostrada na tela de perfil (node 30:5842).
 *
 * O nome "Mariana" e os três contadores são os do design (30:5847, 30:5873,
 * 30:5878, 30:5883). Os contadores NÃO batem com o resto do mock de propósito:
 * o design diz 12 pedidos e 34 favoritos, mas src/data/orders.js tem 3 pedidos
 * e o grid de favoritos mostra 4 peças — as duas listas são recortes ("Últimos
 * pedidos", primeiros favoritos), não a coleção inteira. Manter os números do
 * design é o que reproduz a tela.
 *
 * Os favoritos são slugs do catálogo (src/data/products.js), na ordem em que
 * aparecem em 30:5934…30:5955.
 */

const profile = {
  firstName: 'Mariana',
  stats: [
    { label: 'Pedidos', value: 12 },
    { label: 'Favoritos', value: 34 },
    { label: 'Artesãos seguidos', value: 8 },
  ],
  favoriteSlugs: [
    'vaso-areia-bruta',
    'colar-prata-marina',
    'manta-tear-pampas',
    'tabua-imbuia-curva',
  ],
}

export default profile
