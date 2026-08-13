/**
 * Bloco do artesão na tela de produto (node 30:4749).
 *
 * Faixa de 320px sobre sage a 25%, radius de 38px: a foto de capa ocupa 5 das
 * 12 colunas e o texto as 7 restantes, com 56px de padding.
 */

import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'

function ArtisanBanner({ artisan, className = '' }) {
  return (
    <section
      className={[
        'overflow-hidden rounded-[38px] bg-sage-25 desktop:grid desktop:grid-cols-12',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="desktop:col-span-5">
        <img
          src={artisan.coverImage}
          alt={artisan.name}
          loading="lazy"
          className="h-[320px] w-full object-cover"
        />
      </div>

      <div className="p-14 desktop:col-span-7">
        <div className="flex items-center gap-4">
          <img
            src={artisan.avatar}
            alt=""
            loading="lazy"
            className="size-14 rounded-full object-cover"
          />

          <div>
            <p className="font-sans text-12 uppercase tracking-caps-wide text-ink-60">
              Artesão
            </p>

            {/* text-24 carrega o tracking do wordmark (-0.6px); aqui o design
                pede -0.24px (30:4759). */}
            <p className="font-display text-24 tracking-[-0.24px] text-ink">
              {artisan.name}
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-[576px] text-16 text-ink-75">{artisan.bio}</p>

        <Button
          as={Link}
          to={`/artesao/${artisan.slug}`}
          variant="ctaSecondary"
          size="sm"
          className="mt-8 h-11 px-[25px]"
        >
          Visitar atelier
        </Button>
      </div>
    </section>
  )
}

export default ArtisanBanner
