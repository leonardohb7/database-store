/**
 * Tela Artesão (/artesao/:slug) — node 30:4928.
 *
 * A capa é full-bleed e fica fora do Container; o conteúdo sobe 128px por cima
 * dela (ver ArtisanCover). Daí em diante são três blocos separados por 96px:
 * identidade + "Sobre o atelier", os três princípios e a coleção do atelier.
 *
 * CONTEÚDO ESTÁTICO: `principios` é o texto real do design, que descreve o
 * atelier da Ana Vasconcellos (a referência do node). Não há equivalente por
 * artesão em src/data/artisans.js, então os três cards mostram o mesmo
 * conteúdo em qualquer atelier — trocar por dados do mock quando existirem.
 */

import { Navigate, useParams } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import ProductGrid from '../../components/product/ProductGrid.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import { getArtisanBySlug } from '../../data/artisans.js'
import products from '../../data/products.js'
import ArtisanCover from './ArtisanCover.jsx'
import ArtisanIdentityCard from './ArtisanIdentityCard.jsx'

const principios = [
  {
    title: 'Matéria-prima local',
    text: 'Argilas, fibras e madeiras coletadas em raio de até 200 km do atelier.',
  },
  {
    title: 'Mãos, não máquinas',
    text: 'Tornos, teares manuais e ferramentas tradicionais — sem produção industrial.',
  },
  {
    title: 'Pequenas séries',
    text: 'Edições limitadas garantem o cuidado em cada peça que sai do estúdio.',
  },
]

function Artesao() {
  const { slug } = useParams()

  const artisan = getArtisanBySlug(slug)

  /* Slug inexistente cai na listagem de artesãos. */
  if (!artisan) return <Navigate to="/artesaos" replace />

  /* "Ana Vasconcellos" → "Estúdio Vasconcellos", como no node 30:4940. O mock
     não guarda o nome do estúdio; é derivado do sobrenome. */
  const studio = `Estúdio ${artisan.name.split(' ').pop()}`

  /* O primeiro parágrafo do longBio é o próprio `bio`, que no design aparece
     em destaque; os seguintes são o corpo da seção. */
  const corpo = artisan.longBio.split('\n\n').slice(1)

  const pecas = products.filter((product) => product.artisanId === artisan.id)

  return (
    <div>
      <ArtisanCover src={artisan.coverImage} alt={artisan.name} />

      <Container className="relative flex flex-col gap-24 pb-20">
        <div className="grid gap-10 desktop:grid-cols-12">
          <ArtisanIdentityCard
            artisan={artisan}
            studio={studio}
            className="desktop:col-span-4"
          />

          <section className="desktop:col-span-8 desktop:self-start desktop:pt-6">
            <p className="text-12 uppercase tracking-eyebrow text-slate">
              Sobre o atelier
            </p>

            <p className="mt-4 font-display text-30 leading-[41.25px] text-ink">
              {artisan.bio}
            </p>

            {corpo.map((paragrafo) => (
              <p
                key={paragrafo}
                className="mt-6 max-w-[672px] text-16 text-ink-70"
              >
                {paragrafo}
              </p>
            ))}
          </section>
        </div>

        <ul className="grid gap-8 desktop:grid-cols-3">
          {principios.map(({ title, text }, i) => (
            <li key={title} className="rounded-media bg-sage-20 p-8">
              <p className="font-display text-30 text-coral">
                {String(i + 1).padStart(2, '0')}
              </p>

              <h2 className="mt-3 font-display text-20 tracking-heading text-ink">
                {title}
              </h2>

              <p className="mt-2 text-14 leading-[22.75px] text-ink-70">
                {text}
              </p>
            </li>
          ))}
        </ul>

        {pecas.length > 0 && (
          <section>
            <SectionHeading
              title="Coleção do atelier"
              size="md"
              linkHref="/loja"
            />

            <ProductGrid products={pecas} columns={3} className="mt-10" />
          </section>
        )}
      </Container>
    </div>
  )
}

export default Artesao
