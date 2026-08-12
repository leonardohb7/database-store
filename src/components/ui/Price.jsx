/**
 * Price — preço atual e, opcionalmente, o preço cheio riscado.
 * No design o preço cheio aparece depois do atual, menor e em slate
 * (ex.: "R$ 389" seguido de "R$ 460" riscado).
 *
 * Valores em CENTAVOS — ver src/lib/format.js.
 */

import { formatBRL } from '../../lib/format.js'

function Price({ value, compareAtValue, size = 'md', className = '', ...props }) {
  const tamanhoAtual = size === 'sm' ? 'text-14' : 'text-18'

  return (
    <p
      className={['flex items-baseline gap-2', className].filter(Boolean).join(' ')}
      {...props}
    >
      {/* Inter Medium no design — arteShop/Inter/Medium (30:3863). */}
      <span className={`font-sans font-medium text-ink ${tamanhoAtual}`}>
        {formatBRL(value)}
      </span>

      {compareAtValue != null && compareAtValue > value && (
        <span className="font-sans text-12 text-slate line-through">
          {formatBRL(compareAtValue)}
        </span>
      )}
    </p>
  )
}

export default Price
