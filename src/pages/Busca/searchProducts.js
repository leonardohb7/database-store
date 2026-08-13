/**
 * Busca da tela /busca (node 30:6058).
 *
 * Casa o termo contra quatro campos da peça: nome, categoria, material e nome
 * do artesão. Comparação por `includes` sobre o texto normalizado, então
 * "ceramica" acha "Cerâmica" e "ANA" acha "Ana Vasconcellos".
 *
 * O termo é quebrado em palavras: cada palavra precisa casar com ALGUM campo
 * (AND entre palavras, OR entre campos). É isso que faz os chips de sugestão
 * funcionarem — "Vaso cerâmica" cruza nome com categoria, e nenhuma peça tem
 * as duas palavras juntas num campo só. Buscar a frase inteira como uma
 * substring devolveria zero para quatro dos cinco chips do design.
 *
 * ATENÇÃO ao formato dos dados (mesma ressalva de Colecao/filterProducts.js):
 * `category` é um id ('ceramica') e não o rótulo. Os dois entram no índice —
 * o id porque é o que está na peça, o rótulo porque é como o usuário escreve
 * ("têxteis" nunca acharia o id 'texteis' pelo acento, mas acha pelo rótulo).
 *
 * Termo vazio devolve lista vazia: sem busca não há o que listar, e é o que
 * faz a tela cair no estado inicial em vez de despejar o catálogo inteiro.
 */

import { getArtisanById } from '../../data/artisans.js'
import categories from '../../data/categories.js'
import { normalizar } from '../../lib/normalize.js'

const rotuloDaCategoria = (id) =>
  categories.find((categoria) => categoria.id === id)?.name

/** Campos pesquisáveis de uma peça, já normalizados. */
function indiceDe(product) {
  const artesao = getArtisanById(product.artisanId)

  return [
    product.name,
    product.category,
    rotuloDaCategoria(product.category),
    product.material,
    artesao?.name,
  ]
    .filter(Boolean)
    .map(normalizar)
}

/**
 * @param {Array} products catálogo completo
 * @param {string} termo texto digitado
 * @returns {Array} peças cujo nome, categoria, material ou artesão casam
 */
function searchProducts(products, termo) {
  const palavras = normalizar(termo).split(/\s+/).filter(Boolean)
  if (!palavras.length) return []

  return products.filter((product) => {
    const campos = indiceDe(product)

    return palavras.every((palavra) =>
      campos.some((campo) => campo.includes(palavra)),
    )
  })
}

export default searchProducts
