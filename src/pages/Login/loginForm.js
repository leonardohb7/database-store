/**
 * Regras do formulário de login.
 *
 * O node 30:4113 traz só o estado padrão dos campos: não há erro desenhado nem
 * texto de erro em lugar nenhum da tela. As mensagens abaixo foram escritas
 * para o mock, em pt-BR e no tom das outras telas — mesma decisão de
 * src/pages/Pedido/checkoutForm.js.
 *
 * O regex de email é o mesmo de lá, repetido de propósito: as duas telas são
 * independentes e cruzar um import entre `pages/Login` e `pages/Pedido`
 * amarraria uma na outra por quatro linhas.
 *
 * O mínimo de 6 caracteres da senha também é do mock — o design mostra o campo
 * preenchido com pontos, sem anunciar tamanho nenhum.
 */

const MINIMO_SENHA = 6

/**
 * Regras na ordem em que devem falar: a primeira que reprovar é a mensagem.
 * `normalizar` roda antes — o email tolera espaço sobrando, a senha não, que
 * lá o espaço é caractere como outro qualquer.
 */
const REGRAS = {
  email: {
    normalizar: (v) => v.trim(),
    testes: [
      ['Informe seu email.', (v) => v.length > 0],
      [
        'Email inválido — confira o formato.',
        (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
      ],
    ],
  },
  senha: {
    normalizar: (v) => v,
    testes: [
      ['Informe sua senha.', (v) => v.length > 0],
      [
        `A senha tem no mínimo ${MINIMO_SENHA} caracteres.`,
        (v) => v.length >= MINIMO_SENHA,
      ],
    ],
  },
}

/**
 * @returns {string|null} a mensagem de erro, ou null se o campo está válido.
 */
export function validarCampo(nome, valor) {
  const { normalizar, testes } = REGRAS[nome]
  const texto = normalizar(valor)

  for (const [mensagem, regra] of testes) {
    if (!regra(texto)) return mensagem
  }

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
