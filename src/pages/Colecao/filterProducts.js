/**
 * Filtro da tela de coleção (node 30:4277).
 *
 * Dentro de um grupo as seleções são OR; entre grupos, AND. Grupo vazio não
 * restringe nada — é o que faz "nenhum filtro" devolver as 12 peças.
 *
 * ATENÇÃO ao formato dos dados, que não é uniforme em products.js:
 * `category` é um id ('ceramica'), mas `material` e `region` são rótulos
 * ('Prata 950', 'Nordeste'). Por isso material e região são resolvidos de id
 * para rótulo antes de comparar — comparar id com id daria sempre falso.
 */

import { materials, priceRanges, regions } from '../../data/filters.js'

const rotuloDe = (opcoes, id) => opcoes.find((opcao) => opcao.id === id)?.label

/**
 * Faixas de preço são meio-abertas — [min, max) — para uma peça nunca cair em
 * duas faixas. Nenhum preço do mock cai exatamente num limite, então a escolha
 * não muda o resultado hoje; ela existe para quando cair.
 */
function dentroDaFaixa(price, faixaId) {
  const faixa = priceRanges.find((f) => f.id === faixaId)
  if (!faixa) return false

  return price >= faixa.min && (faixa.max === null || price < faixa.max)
}

/**
 * @param {Array} products catálogo completo
 * @param {{categoria: string[], preco: string[], material: string[], regiao: string[]}} selecao
 * @returns {Array} peças que atendem a todos os grupos com seleção
 */
function filterProducts(products, selecao) {
  const { categoria, preco, material, regiao } = selecao

  return products.filter((product) => {
    if (categoria.length && !categoria.includes(product.category)) {
      return false
    }

    if (preco.length && !preco.some((id) => dentroDaFaixa(product.price, id))) {
      return false
    }

    if (
      material.length &&
      !material.some((id) => rotuloDe(materials, id) === product.material)
    ) {
      return false
    }

    if (
      regiao.length &&
      !regiao.some((id) => rotuloDe(regions, id) === product.region)
    ) {
      return false
    }

    return true
  })
}

export default filterProducts
