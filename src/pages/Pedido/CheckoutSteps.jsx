/**
 * Stepper de quatro passos do checkout — nodes 30:5336 (/checkout) e
 * 30:5643 (/checkout/confirmacao).
 *
 * O passo atual vem por prop porque as duas telas do fluxo usam o mesmo
 * stepper: "Entrega" (2) no checkout e "Confirmação" (4) na confirmação.
 * Concluídos ficam em Coral Tree, o atual com a bolinha Ebony Clay e o rótulo
 * em Inter Medium, e os pendentes apagados, com a bolinha em Ebony Clay 10%.
 * Não há navegação entre passos em nenhuma das duas.
 *
 * DIVERGÊNCIA em 30:5643: ali as bolinhas 1–3 estão todas em Coral Tree e a 4
 * em Ebony Clay — o que casa com "passo 4 ativo" e é o que reproduzimos. Mas
 * os rótulos ficaram inconsistentes no arquivo ("Entrega" ainda em Inter
 * Medium/ink como se fosse o atual, "Pagamento" em Shuttle Gray como se fosse
 * pendente). Tratamos isso como resíduo da tela anterior e aplicamos os
 * estados de forma coerente: 1–3 concluídos, 4 atual.
 */

import IconChevronDireita from '../../components/ui/icons/IconChevronDireita.jsx'

const PASSOS = ['Sacola', 'Entrega', 'Pagamento', 'Confirmação']

const bolinha = {
  concluido: 'bg-coral text-bridal',
  atual: 'bg-ink font-medium text-cream',
  pendente: 'bg-ink-10 text-slate',
}

const rotulo = {
  concluido: 'text-coral',
  atual: 'font-medium text-ink',
  pendente: 'text-slate',
}

function estadoDoPasso(numero, atual) {
  if (numero < atual) return 'concluido'
  if (numero === atual) return 'atual'
  return 'pendente'
}

/** @param {{atual?: number}} props índice base 1 do passo ativo, como no node. */
function CheckoutSteps({ atual = 2 }) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {PASSOS.map((passo, indice) => {
        const numero = indice + 1
        const estado = estadoDoPasso(numero, atual)

        return (
          <li
            key={passo}
            aria-current={estado === 'atual' ? 'step' : undefined}
            className="flex items-center gap-2"
          >
            {indice > 0 && <IconChevronDireita className="shrink-0 text-slate" />}

            <span
              aria-hidden="true"
              className={`flex size-6 shrink-0 items-center justify-center rounded-full text-10 ${bolinha[estado]}`}
            >
              {numero}
            </span>

            <span className={`text-12 ${rotulo[estado]}`}>{passo}</span>
          </li>
        )
      })}
    </ol>
  )
}

export default CheckoutSteps
