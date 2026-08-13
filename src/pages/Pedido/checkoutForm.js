/**
 * Regras do formulário de checkout — máscaras, validação e número do pedido.
 *
 * O node 30:5326 traz só o estado padrão dos campos: não há erro desenhado nem
 * texto de erro em lugar nenhum da tela. As mensagens abaixo foram escritas
 * para o mock, em pt-BR e no tom das outras telas — mesma decisão do estado
 * vazio da Sacola. O que VEM do design são os placeholders e os formatos que
 * eles anunciam: "01310-100" (CEP), "0000 0000 0000 0000" (cartão), "MM/AA"
 * (validade), "000" (CVV) e "SP" (estado).
 */

const digitos = (valor) => valor.replace(/\D/g, '')

/* -- Máscaras -------------------------------------------------------------
   Todas cortam no comprimento máximo, então o campo nunca aceita mais do que
   o formato do design comporta. */

export function mascaraCep(valor) {
  const d = digitos(valor).slice(0, 8)
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d
}

export function mascaraCartao(valor) {
  return digitos(valor)
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, '$1 ')
}

export function mascaraValidade(valor) {
  const d = digitos(valor).slice(0, 4)
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d
}

export function mascaraCvv(valor) {
  return digitos(valor).slice(0, 3)
}

/** O placeholder do design é "SP": sigla de duas letras, em caixa alta. */
export function mascaraEstado(valor) {
  return valor.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase()
}

/* -- Validação ------------------------------------------------------------ */

/** Complemento é o único campo opcional — o design não marca nenhum. */
const OBRIGATORIOS = {
  email: 'Informe seu email.',
  nome: 'Informe o nome.',
  sobrenome: 'Informe o sobrenome.',
  cep: 'Informe o CEP.',
  endereco: 'Informe o endereço.',
  numero: 'Informe o número.',
  bairro: 'Informe o bairro.',
  cidade: 'Informe a cidade.',
  estado: 'Informe o estado.',
  cartaoNumero: 'Informe o número do cartão.',
  cartaoNome: 'Informe o nome impresso no cartão.',
  validade: 'Informe a validade.',
  cvv: 'Informe o CVV.',
}

/** Mês entre 01 e 12; o ano é livre, o mock não tem "hoje" de referência. */
function validadeOk(valor) {
  const [mes, ano] = valor.split('/')

  if (!/^\d{2}$/.test(mes ?? '') || !/^\d{2}$/.test(ano ?? '')) return false

  return Number(mes) >= 1 && Number(mes) <= 12
}

const FORMATOS = {
  email: [
    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
    'Email inválido — confira o formato.',
  ],
  cep: [(v) => /^\d{5}-\d{3}$/.test(v), 'CEP incompleto — use 00000-000.'],
  estado: [(v) => /^[A-Z]{2}$/.test(v), 'Use a sigla do estado, como SP.'],
  cartaoNumero: [
    (v) => digitos(v).length === 16,
    'O número do cartão tem 16 dígitos.',
  ],
  validade: [validadeOk, 'Validade inválida — use MM/AA.'],
  cvv: [(v) => v.length === 3, 'O CVV tem 3 dígitos.'],
}

/**
 * @returns {string|null} a mensagem de erro, ou null se o campo está válido.
 */
export function validarCampo(nome, valor) {
  const texto = valor.trim()

  if (OBRIGATORIOS[nome] && !texto) return OBRIGATORIOS[nome]

  const [regra, mensagem] = FORMATOS[nome] ?? []

  if (regra && texto && !regra(texto)) return mensagem

  return null
}

/** @returns {Record<string, string>} só os campos com erro. */
export function validarTudo(valores) {
  return Object.keys(valores).reduce((erros, nome) => {
    const erro = validarCampo(nome, valores[nome])

    if (erro) erros[nome] = erro

    return erros
  }, {})
}

/** Mesmo formato dos pedidos do mock (src/data/orders.js): AS-2891. */
export function gerarNumeroPedido() {
  return `AS-${Math.floor(1000 + Math.random() * 9000)}`
}
