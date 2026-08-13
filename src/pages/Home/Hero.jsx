/**
 * Hero da Home — node 30:3736. Também é o topo do Login (node 30:4117), que
 * repete a composição inteira — mesmo H1, mesmo parágrafo, mesmo mosaico e a
 * mesma faixa de selos — trocando só o eyebrow e o par de CTAs. Daí as props
 * `eyebrow` e `acoes`, que caem nos valores da Home quando omitidas.
 *
 * Grid de 12 colunas com gutter de 56px (não é o `grid-page`, que usa 24px):
 * texto nas colunas 1–5, mosaico de imagens nas 6–12, ambos alinhados pela
 * base numa faixa de 620px. Abaixo, a faixa de três selos entre filetes de
 * 1px em ink-10.
 *
 * O raio de 38px das imagens é próprio do hero — `--radius-media` (30px) é o
 * raio dos cards, não serve aqui.
 *
 * O mosaico é `div.hidden` no design: só aparece a partir de desktop.
 */

import { Link } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import Button from '../../components/ui/Button.jsx'
import IconCaminhao from '../../components/ui/icons/IconCaminhao.jsx'
import IconFolha from '../../components/ui/icons/IconFolha.jsx'
import IconMao from '../../components/ui/icons/IconMao.jsx'

/**
 * As três fotos do mosaico. Os frames do Figma trazem imagens de banco genéricas
 * (o designer deixou placeholders), mas os layers estão nomeados — "Vaso de
 * cerâmica feito à mão", "Joalheria em prata" e "Têxtil artesanal". Usamos as
 * fotos que já correspondem a esses assuntos em src/data, em vez dos exports,
 * que além de destoarem do nome expiram em 7 dias.
 */
const IMG = '?w=1200&h=1400&fit=crop'
const mosaico = [
  {
    src: `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61${IMG}`,
    alt: 'Vaso de cerâmica feito à mão',
    className: 'col-span-3 row-span-6',
  },
  {
    src: `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338${IMG}`,
    alt: 'Joalheria em prata',
    className: 'col-start-4 col-span-2 row-span-3',
  },
  {
    src: `https://images.unsplash.com/photo-1594938298603-c8148c4dae35${IMG}`,
    alt: 'Têxtil artesanal',
    className: 'col-start-4 col-span-2 row-start-4 row-span-3 bg-blush-40',
    /* No design esta foto vem sobre Cupid 40% em multiply. */
    blend: true,
  },
]

/**
 * Eyebrow e CTAs da Home (30:3739, 30:3745). O Login passa os seus.
 * Cada ação vira um `Button`: `variant` e `label` são consumidos, o resto é
 * repassado — assim a ação pode ser um `Link` do router ou uma âncora comum.
 */
const EYEBROW_HOME = 'Coleção outono · 2026'

const ACOES_HOME = [
  { label: 'Explorar coleção', variant: 'cta', as: Link, to: '/loja' },
  {
    label: 'Conheça os artesãos',
    variant: 'ctaSecondary',
    as: Link,
    to: '/artesaos',
  },
]

const selos = [
  {
    Icon: IconMao,
    title: 'Feito à mão',
    description: 'Cada peça produzida por um artesão real, com nome e endereço.',
  },
  {
    Icon: IconFolha,
    title: 'Materiais naturais',
    description:
      'Madeiras de reflorestamento, fibras vegetais, pigmentos minerais.',
  },
  {
    Icon: IconCaminhao,
    title: 'Embalagem cuidadosa',
    description:
      'Caixas em papel reciclado, sem plástico. Frete grátis acima de R$ 600.',
  },
]

function Hero({ eyebrow = EYEBROW_HOME, acoes = ACOES_HOME }) {
  return (
    <Container className="flex flex-col gap-20 pt-16">
      <div className="grid gap-14 desktop:h-[620px] desktop:grid-cols-12">
        <div className="flex flex-col gap-6 desktop:col-span-5 desktop:self-end">
          <p className="font-sans text-12 uppercase tracking-eyebrow text-slate">
            {eyebrow}
          </p>

          <h1 className="font-display text-64 text-ink">
            <span className="block">Objetos com</span>
            <span className="block italic text-coral">a marca</span>
            <span className="block">das mãos.</span>
          </h1>

          <p className="max-w-[448px] pt-1 text-16 text-ink-70">
            Cerâmica, têxteis, joalheria e madeira por artesãos brasileiros
            independentes. Cada peça é única — e leva tempo, como deve ser.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            {acoes.map(({ label, variant, ...props }) => (
              <Button key={label} variant={variant} {...props}>
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className="hidden h-[620px] grid-cols-5 grid-rows-6 gap-4 self-end desktop:col-start-6 desktop:col-span-7 desktop:grid">
          {mosaico.map((imagem) => (
            <div
              key={imagem.alt}
              className={['overflow-hidden rounded-[38px]', imagem.className]
                .filter(Boolean)
                .join(' ')}
            >
              <img
                src={imagem.src}
                alt={imagem.alt}
                className={[
                  'h-full w-full object-cover',
                  imagem.blend && 'mix-blend-multiply',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 border-y border-ink-10 py-[41px] desktop:grid-cols-3">
        {selos.map(({ Icon, title, description }) => (
          <div key={title} className="flex gap-4">
            <Icon className="mt-1 shrink-0 text-coral" />

            <div className="flex flex-col gap-1">
              <h2 className="font-display text-18 leading-7 tracking-title text-ink">
                {title}
              </h2>
              <p className="text-14 text-slate">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Hero
