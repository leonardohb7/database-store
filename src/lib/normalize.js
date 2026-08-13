/**
 * Normalização de texto para comparação.
 *
 * Usado pela busca (/busca): "CERÂMICA", "ceramica" e "Cerâmica" precisam
 * casar entre si. NFD separa a letra do acento; o range U+0300–U+036F é o
 * bloco de diacríticos combinantes, então remover só ele preserva as letras.
 * Vale para o cedilha também: "açaí" → "acai".
 */

const DIACRITICOS = /[̀-ͯ]/g

/**
 * @param {string} texto
 * @returns {string} minúsculas, sem acento e sem espaço nas pontas
 */
export function normalizar(texto = '') {
  return texto.normalize('NFD').replace(DIACRITICOS, '').toLowerCase().trim()
}
