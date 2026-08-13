/**
 * Stepper de quatro passos do checkout — node 30:5336.
 *
 * O passo atual é fixo em "Entrega": é o que o node mostra (bolinha Ebony Clay
 * com o rótulo em Inter Medium). "Sacola" aparece concluído, em Coral Tree, e
 * "Pagamento" e "Confirmação" apagados, com a bolinha em Ebony Clay 10%.
 * O checkout é uma tela só, então não há navegação entre passos.
 */

import IconChevronDireita from '../../components/ui/icons/IconChevronDireita.jsx'

const PASSOS = ['Sacola', 'Entrega', 'Pagamento', 'Confirmação']

/** Índice base 1 do passo atual, como no node. */
const PASSO_ATUAL = 2

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

function estadoDoPasso(numero) {
  if (numero < PASSO_ATUAL) return 'concluido'
  if (numero === PASSO_ATUAL) return 'atual'
  return 'pendente'
}

function CheckoutSteps() {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {PASSOS.map((passo, indice) => {
        const numero = indice + 1
        const estado = estadoDoPasso(numero)

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
