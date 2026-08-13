/**
 * Stepper de quantidade da tela de produto (node 30:4679).
 *
 * Pílula de 54px com borda de 1px em ink-15 e 1px de padding: os dois botões
 * de 52px encostam na borda, e o número fica numa faixa de 40px no meio.
 */

import IconMais from '../../components/ui/icons/IconMais.jsx'
import IconMenos from '../../components/ui/icons/IconMenos.jsx'

const botao =
  'flex size-13 items-center justify-center text-ink transition-colors ' +
  'duration-200 ease-out hover:bg-ink-5 focus-visible:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-coral ' +
  'disabled:pointer-events-none disabled:opacity-40'

function QuantityStepper({ value, onChange, min = 1, max = 99 }) {
  return (
    <div className="flex h-[54px] items-center rounded-full border border-ink-15 p-px">
      <button
        type="button"
        aria-label="Diminuir quantidade"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        className={`${botao} rounded-l-full`}
      >
        <IconMenos />
      </button>

      {/* aria-live: o leitor de tela anuncia o novo valor sem mover o foco. */}
      <span
        aria-live="polite"
        className="w-10 text-center font-sans text-14 text-ink"
      >
        {value}
      </span>

      <button
        type="button"
        aria-label="Aumentar quantidade"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className={`${botao} rounded-r-full`}
      >
        <IconMais />
      </button>
    </div>
  )
}

export default QuantityStepper
