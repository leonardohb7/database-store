/**
 * QuantityStepper — pílula de quantidade, com borda de 1px em ink-15 e 1px de
 * padding, para os botões encostarem na borda.
 *
 * Dois tamanhos, ambos vindos do design:
 * - `md` tela de produto (node 30:4679): pílula de 54px, botões de 52px,
 *        número numa faixa de 40px, ícones de 16px;
 * - `sm` sacola (node 30:5150): botões de 36px, faixa de 32px, ícones de 14px.
 */

import IconMais from './icons/IconMais.jsx'
import IconMenos from './icons/IconMenos.jsx'

const tamanhos = {
  md: { caixa: 'h-[54px]', botao: 'size-13', valor: 'w-10', icone: 16 },
  sm: { caixa: 'h-[38px]', botao: 'size-9', valor: 'w-8', icone: 14 },
}

const botaoBase =
  'flex items-center justify-center text-ink transition-colors ' +
  'duration-200 ease-out hover:bg-ink-5 focus-visible:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-coral ' +
  'disabled:pointer-events-none disabled:opacity-40'

function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  label = 'quantidade',
}) {
  const { caixa, botao, valor, icone } = tamanhos[size] ?? tamanhos.md

  return (
    <div
      className={`flex items-center rounded-full border border-ink-15 p-px ${caixa}`}
    >
      <button
        type="button"
        aria-label={`Diminuir ${label}`}
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        className={`${botaoBase} ${botao} rounded-l-full`}
      >
        <IconMenos width={icone} height={icone} />
      </button>

      {/* aria-live: o leitor de tela anuncia o novo valor sem mover o foco. */}
      <span
        aria-live="polite"
        className={`text-center font-sans text-14 text-ink ${valor}`}
      >
        {value}
      </span>

      <button
        type="button"
        aria-label={`Aumentar ${label}`}
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className={`${botaoBase} ${botao} rounded-r-full`}
      >
        <IconMais width={icone} height={icone} />
      </button>
    </div>
  )
}

export default QuantityStepper
