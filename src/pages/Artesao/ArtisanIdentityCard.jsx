/**
 * Card de identidade do artesão (node 30:4936).
 *
 * Card branco de 4 colunas que sobrepõe a base da capa, com o avatar de 96px
 * saindo pelo topo (borda branca de 4px, `top-[-48px]` no node). No design
 * tudo é posicionado em absoluto dentro de uma caixa de 322px; aqui virou
 * fluxo, com o `pt-[68px]` reservando o espaço do avatar e as margens
 * reproduzindo os offsets do node (68 → 92 → 144 → 244).
 */

import Button from '../../components/ui/Button.jsx'
import IconLocal from '../../components/ui/icons/IconLocal.jsx'
import IconMedalha from '../../components/ui/icons/IconMedalha.jsx'
import IconPacote from '../../components/ui/icons/IconPacote.jsx'

function ArtisanIdentityCard({ artisan, studio, className = '' }) {
  const meta = [
    { icon: IconLocal, label: `${artisan.city}, ${artisan.state}` },
    { icon: IconMedalha, label: artisan.craft },
    { icon: IconPacote, label: `${artisan.pieceCount} peças no atelier` },
  ]

  return (
    <div
      className={[
        'relative rounded-[38px] border border-ink-10 bg-white px-8 pb-8 pt-[68px] shadow-cta',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img
        src={artisan.avatar}
        alt={artisan.name}
        className="absolute -top-12 left-8 size-24 rounded-full border-4 border-white object-cover"
      />

      {/* 3px não está na escala de tracking do projeto — valor do node. */}
      <p className="text-12 uppercase tracking-[3px] text-slate">{studio}</p>

      <h1 className="mt-2 font-display text-30 text-ink">{artisan.name}</h1>

      <ul className="mt-4 flex flex-col gap-[7.5px]">
        {meta.map(({ icon: Icone, label }) => (
          <li key={label} className="flex items-center gap-2 text-ink-70">
            <Icone className="shrink-0" />
            <span className="text-14">{label}</span>
          </li>
        ))}
      </ul>

      {/* Seguir e Mensagem ainda não têm destino: não há auth nem mensagens. */}
      <div className="mt-6 flex items-start gap-2">
        <Button
          type="button"
          variant="cta"
          size="sm"
          className="h-11 flex-1 px-6"
        >
          Seguir atelier
        </Button>

        <Button
          type="button"
          variant="ctaSecondary"
          size="sm"
          className="h-11 px-[25px]"
        >
          Mensagem
        </Button>
      </div>
    </div>
  )
}

export default ArtisanIdentityCard
