/**
 * Tela Produto (/produto/:slug) — node 30:4629.
 *
 * Duas colunas de 7 e 5 (grid de 12, gutter de 64px): galeria à esquerda e a
 * coluna de compra à direita, que fica grudada no topo enquanto a galeria
 * rola. Abaixo, as seções Processo/Materiais, o bloco do artesão, as
 * avaliações e os relacionados.
 *
 * CONTEÚDO ESTÁTICO: `processo` e `materiais` são o texto real do design, que
 * descreve o Colar Prata Marina (a peça de referência do node). Não existe
 * equivalente por peça em src/data/products.js, então as duas seções mostram
 * o mesmo conteúdo em qualquer produto — trocar por dados do mock quando eles
 * existirem.
 */

import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import ProductGrid from '../../components/product/ProductGrid.jsx'
import Breadcrumb from '../../components/ui/Breadcrumb.jsx'
import Button from '../../components/ui/Button.jsx'
import QuantityStepper from '../../components/ui/QuantityStepper.jsx'
import Rating from '../../components/ui/Rating.jsx'
import IconCaminhao from '../../components/ui/icons/IconCaminhao.jsx'
import IconCompartilhar from '../../components/ui/icons/IconCompartilhar.jsx'
import IconEscudo from '../../components/ui/icons/IconEscudo.jsx'
import IconFavoritos from '../../components/ui/icons/IconFavoritos.jsx'
import IconTroca from '../../components/ui/icons/IconTroca.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { getArtisanById } from '../../data/artisans.js'
import categories from '../../data/categories.js'
import products, { getProductBySlug } from '../../data/products.js'
import reviews from '../../data/reviews.js'
import { formatBRL } from '../../lib/format.js'
import ArtisanBanner from './ArtisanBanner.jsx'
import ProductGallery from './ProductGallery.jsx'
import ReviewCard from './ReviewCard.jsx'

const processo = [
  'Preparo do barro com argila local',
  'Modelagem manual no torno',
  'Secagem natural de 20 dias',
  'Queima a lenha a 1240°C',
]

const materiais = [
  { label: 'Prata 950', value: 'Brasil' },
  { label: 'Algodão encerado', value: 'Brasil' },
  { label: 'Cuidado', value: 'Lavar à mão' },
]

const selos = [
  { icon: IconCaminhao, label: 'Envio em 5 dias' },
  { icon: IconTroca, label: 'Troca em 14 dias' },
  { icon: IconEscudo, label: 'Compra segura' },
]

const botaoRedondo =
  'flex size-13 items-center justify-center rounded-full border border-ink-15 ' +
  'text-ink transition-colors duration-200 ease-out hover:border-ink-50 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral'

function Produto() {
  const { slug } = useParams()
  const [quantidade, setQuantidade] = useState(1)
  const { addItem } = useCart()

  const product = getProductBySlug(slug)

  /* Slug inexistente cai na coleção, que é a tela mais próxima. */
  if (!product) return <Navigate to="/loja" replace />

  const artisan = getArtisanById(product.artisanId)
  const categoria = categories.find((item) => item.id === product.category)
  const avaliacoes = reviews.filter((review) => review.productId === product.id)
  const relacionados = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4)

  return (
    <Container className="flex flex-col gap-8 pb-20 pt-8">
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Loja', href: '/loja' },
          { label: categoria?.name ?? product.category },
        ]}
      />

      <div className="grid gap-16 desktop:grid-cols-12">
        <ProductGallery
          images={product.images}
          alt={product.name}
          className="desktop:col-span-7"
        />

        {/* O design cola a coluna em `top-0` (30:4655), mas o Header do
            projeto é sticky e ocupa os primeiros 81px (o `main` do node começa
            em 81px) — daí o offset, para a coluna parar logo abaixo dele. */}
        <div className="desktop:sticky desktop:top-[81px] desktop:col-span-5 desktop:self-start">
          <h1 className="font-display text-48 text-ink">{product.name}</h1>

          {artisan && (
            <Link
              to={`/artesao/${artisan.slug}`}
              className="mt-4 flex flex-wrap items-center gap-3 text-14 text-ink-70 transition-colors duration-200 hover:text-coral"
            >
              <span>por</span>
              <span className="underline underline-offset-2">
                {artisan.name}
              </span>
              <span>
                · {artisan.city}, {artisan.state}
              </span>
            </Link>
          )}

          <div className="mt-5 flex items-center gap-2">
            <Rating value={product.rating} />
            <span className="text-14 text-ink-70">
              {product.rating} · {product.reviewCount} avaliações
            </span>
          </div>

          <p className="mt-7 flex items-baseline gap-3">
            <span className="font-display text-30 text-ink">
              {formatBRL(product.price)}
            </span>

            {/* Mesmo par de preços do ProductCard (30:3863) — o node de
                referência não tem preço cheio, mas outras peças têm. */}
            {product.compareAtPrice > product.price && (
              <span className="text-14 text-slate line-through">
                {formatBRL(product.compareAtPrice)}
              </span>
            )}
          </p>

          <p className="mt-1 text-12 text-slate">
            Em até 6x sem juros · Frete calculado no checkout
          </p>

          <p className="mt-7 text-16 text-ink-75">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <QuantityStepper value={quantidade} onChange={setQuantidade} />

            {/* Some a quantidade escolhida e devolve o stepper a 1, para não
                sugerir que o próximo clique repetiria a mesma soma. */}
            <Button
              type="button"
              variant="cta"
              size="md"
              className="flex-1"
              onClick={() => {
                addItem(product, quantidade)
                setQuantidade(1)
              }}
            >
              Adicionar à sacola
            </Button>

            <button
              type="button"
              aria-label={`Favoritar ${product.name}`}
              className={botaoRedondo}
            >
              <IconFavoritos width="16" height="16" />
            </button>

            <button
              type="button"
              aria-label={`Compartilhar ${product.name}`}
              className={botaoRedondo}
            >
              <IconCompartilhar />
            </button>
          </div>

          <ul className="mt-10 grid grid-cols-3 gap-2 border-t border-ink-10 pt-[33px]">
            {selos.map(({ icon: Icone, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-[7.5px] text-ink-70"
              >
                <Icone />
                <span className="text-center text-12">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-16 py-20 desktop:grid-cols-2">
        <section>
          <p className="text-12 uppercase tracking-eyebrow text-slate">
            Processo
          </p>

          <h2 className="mt-4 font-display text-36 text-ink">
            Como esta peça é feita
          </h2>

          <p className="mt-5 text-16 text-ink-70">
            Trabalho exclusivamente manual, sem moldes industriais. Cada etapa —
            preparo do barro, modelagem, secagem ao ar livre, queima a lenha —
            leva entre vinte e trinta dias.
          </p>

          <ol className="mt-8 flex flex-col gap-4">
            {processo.map((etapa, i) => (
              <li key={etapa} className="flex items-start gap-4">
                <span className="font-display text-20 tracking-heading text-coral">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="pt-1 text-14 text-ink">{etapa}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <p className="text-12 uppercase tracking-eyebrow text-slate">
            Materiais
          </p>

          <h2 className="mt-4 font-display text-36 text-ink">
            Naturais e rastreáveis
          </h2>

          <ul className="mt-8">
            {materiais.map(({ label, value }, i) => (
              <li
                key={label}
                className={[
                  'flex items-start justify-between gap-4 py-4 text-14',
                  i < materiais.length - 1 && 'border-b border-ink-10',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="text-ink">{label}</span>
                <span className="text-slate">{value}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {artisan && <ArtisanBanner artisan={artisan} />}

      {avaliacoes.length > 0 && (
        <section className="pt-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-12 uppercase tracking-eyebrow text-slate">
                Avaliações
              </p>

              <h2 className="mt-3 font-display text-36 leading-10 text-ink">
                {product.rating} de 5 · {product.reviewCount} comentários
              </h2>
            </div>

            {/* O formulário de avaliação não existe no design nem no escopo. */}
            <Button
              type="button"
              variant="ctaSecondary"
              size="sm"
              className="h-11 px-[25px]"
            >
              Escrever avaliação
            </Button>
          </div>

          <div className="mt-10 grid gap-6 desktop:grid-cols-3">
            {avaliacoes.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}

      {relacionados.length > 0 && (
        <section className="pt-20">
          <h2 className="font-display text-36 leading-10 text-ink">
            Você também pode gostar
          </h2>

          <ProductGrid products={relacionados} columns={4} className="mt-10" />
        </section>
      )}
    </Container>
  )
}

export default Produto
