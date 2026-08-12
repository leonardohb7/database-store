/**
 * Página temporária de validação visual dos design tokens e dos primitivos.
 * Serve para conferir a paleta, a escala tipográfica, o grid e os componentes
 * de src/components/ui antes de implementar as telas.
 * Pode ser removida depois — junto com a rota em App.jsx.
 */

import ArtisanCard from '../../components/product/ArtisanCard.jsx'
import CategoryStrip from '../../components/product/CategoryStrip.jsx'
import ProductGrid from '../../components/product/ProductGrid.jsx'
import artisans from '../../data/artisans.js'
import categories from '../../data/categories.js'
import products from '../../data/products.js'
import Breadcrumb from '../../components/ui/Breadcrumb.jsx'
import Button from '../../components/ui/Button.jsx'
import Checkbox from '../../components/ui/Checkbox.jsx'
import Input from '../../components/ui/Input.jsx'
import Price from '../../components/ui/Price.jsx'
import Rating from '../../components/ui/Rating.jsx'
import SectionHeading from '../../components/ui/SectionHeading.jsx'
import Tag from '../../components/ui/Tag.jsx'

const CORES = [
  { nome: 'cream', hex: '#FFFAE8', figma: 'Early Dawn', uso: 'Fundo padrão das páginas', classe: 'bg-cream', borda: true },
  { nome: 'linen', hex: '#FBF4E6', figma: 'Linen', uso: 'Fundo alternativo de seções', classe: 'bg-linen', borda: true },
  { nome: 'ecru', hex: '#F4EEE4', figma: 'Ecru White', uso: 'Cards e blocos suaves', classe: 'bg-ecru', borda: true },
  { nome: 'bridal', hex: '#FFFBF4', figma: 'Bridal Heath', uso: 'Superfícies claras', classe: 'bg-bridal', borda: true },
  { nome: 'ink', hex: '#253541', figma: 'Ebony Clay', uso: 'Texto principal / bloco escuro', classe: 'bg-ink' },
  { nome: 'slate', hex: '#5B646F', figma: 'Shuttle Gray', uso: 'Texto secundário / muted', classe: 'bg-slate' },
  { nome: 'coral', hex: '#AB6C6F', figma: 'Coral Tree', uso: 'Marca, botões primários, links', classe: 'bg-coral' },
  { nome: 'sage', hex: '#A3B18F', figma: 'Locust', uso: 'Badge / acento', classe: 'bg-sage' },
  { nome: 'blush', hex: '#FBC8D2', figma: 'Cupid', uso: 'Badge secundário', classe: 'bg-blush' },
  { nome: 'star', hex: '#C66F4A', figma: '—', uso: 'Estrelas de avaliação', classe: 'bg-star' },
  { nome: 'border', hex: '#ECEBE8', figma: '—', uso: 'Bordas de card', classe: 'bg-border', borda: true },
]

const INK_ALPHAS = [
  { nome: 'ink/5', classe: 'bg-ink-5' },
  { nome: 'ink/10', classe: 'bg-ink-10' },
  { nome: 'ink/15', classe: 'bg-ink-15' },
  { nome: 'ink/50', classe: 'bg-ink-50' },
  { nome: 'ink/60', classe: 'bg-ink-60' },
  { nome: 'ink/70', classe: 'bg-ink-70' },
  { nome: 'ink/80', classe: 'bg-ink-80' },
]

const CREAM_ALPHAS = [
  { nome: 'cream/10', classe: 'bg-cream-10' },
  { nome: 'cream/20', classe: 'bg-cream-20' },
  { nome: 'cream/50', classe: 'bg-cream-50' },
  { nome: 'cream/60', classe: 'bg-cream-60' },
  { nome: 'cream/85', classe: 'bg-cream-85' },
  { nome: 'cream/95', classe: 'bg-cream-95' },
]

const ESCALA = [
  { classe: 'text-10', tamanho: '10px', lh: '15px' },
  { classe: 'text-11', tamanho: '11px', lh: '16.5px' },
  { classe: 'text-12', tamanho: '12px', lh: '16px' },
  { classe: 'text-14', tamanho: '14px', lh: '20px' },
  { classe: 'text-16', tamanho: '16px', lh: '26px' },
  { classe: 'text-18', tamanho: '18px', lh: '24.75px' },
  { classe: 'text-48', tamanho: '48px', lh: '60px', ls: '-0.48px' },
  { classe: 'text-64', tamanho: '64px', lh: '65.28px', ls: '-1.6px' },
]

const TRACKINGS = [
  { nome: 'tracking-hero', valor: '-1.6px', classe: 'tracking-hero' },
  { nome: 'tracking-display', valor: '-0.48px', classe: 'tracking-display' },
  { nome: 'tracking-heading', valor: '-0.2px', classe: 'tracking-heading' },
  { nome: 'tracking-title', valor: '-0.18px', classe: 'tracking-title' },
  { nome: 'tracking-body', valor: '-0.16px', classe: 'tracking-body' },
  { nome: 'tracking-button', valor: '0.4px', classe: 'tracking-button' },
  { nome: 'tracking-label', valor: '1.98px', classe: 'tracking-label' },
  { nome: 'tracking-caps', valor: '2px', classe: 'tracking-caps' },
  { nome: 'tracking-caps-wide', valor: '2.4px', classe: 'tracking-caps-wide' },
  { nome: 'tracking-eyebrow', valor: '3.6px', classe: 'tracking-eyebrow' },
]

const RAIOS = [
  { nome: 'rounded-button', valor: '8px', classe: 'rounded-button' },
  { nome: 'rounded-card', valor: '12px', classe: 'rounded-card' },
  { nome: 'rounded-2xl', valor: '16px', classe: 'rounded-2xl' },
  { nome: 'rounded-3xl', valor: '24px', classe: 'rounded-3xl' },
  { nome: 'rounded-full', valor: 'pill', classe: 'rounded-full' },
]

const BOTOES = [
  { variant: 'primary', rotulo: 'Primary' },
  { variant: 'secondary', rotulo: 'Secondary' },
  { variant: 'link', rotulo: 'Link' },
  { variant: 'cta', rotulo: 'CTA (do design)' },
]

const TAGS = ['edicao-limitada', 'novo', 'best-seller', 'sob-encomenda']

/** Célula rotulada, para mostrar um estado por vez. */
function Estado({ nome, children }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <span className="text-10 uppercase tracking-caps-wide text-slate">
        {nome}
      </span>
      {children}
    </div>
  )
}

function Secao({ numero, titulo, children }) {
  return (
    <section className="mt-16">
      <h2 className="text-12 tracking-caps-wide font-sans font-medium text-slate uppercase">
        {numero}. {titulo}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function Styleguide() {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container-page">
        <header>
          <p className="text-12 tracking-eyebrow text-slate uppercase">
            Guia de estilo · interno
          </p>
          <h1 className="mt-5 font-display text-48 text-ink">
            ArteShop Brasil
          </h1>
          <p className="mt-3 max-w-[560px] text-16 text-ink-70">
            Validação visual dos tokens extraídos do Figma. Todos os valores
            abaixo vêm das variáveis <code>arteShop/*</code> do arquivo de
            design — nada foi arbitrado.
          </p>
        </header>

        <Secao numero="01" titulo="Cores">
          <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3 desktop:grid-cols-4">
            {CORES.map((cor) => (
              <div key={cor.nome}>
                <div
                  className={`${cor.classe} h-20 rounded-card ${
                    cor.borda ? 'border border-border' : ''
                  }`}
                />
                <p className="mt-3 text-14 font-medium text-ink">{cor.nome}</p>
                <p className="text-12 text-slate uppercase">{cor.hex}</p>
                <p className="mt-1 text-11 text-ink-60">{cor.uso}</p>
              </div>
            ))}
          </div>
        </Secao>

        <Secao numero="02" titulo="Alphas de ink">
          <div className="grid grid-cols-4 gap-4 tablet:grid-cols-7">
            {INK_ALPHAS.map((a) => (
              <div key={a.nome}>
                <div className={`${a.classe} h-16 rounded-button`} />
                <p className="mt-2 text-11 text-slate">{a.nome}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-14 text-ink-70">
            Alphas de cream (sobre bloco escuro, para scrims e overlays):
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 rounded-card bg-ink p-5 tablet:grid-cols-6">
            {CREAM_ALPHAS.map((a) => (
              <div key={a.nome}>
                <div className={`${a.classe} h-16 rounded-button`} />
                <p className="mt-2 text-11 text-cream-60">{a.nome}</p>
              </div>
            ))}
          </div>
        </Secao>

        <Secao numero="03" titulo="Tipografia">
          <div className="rounded-card border border-border bg-bridal p-8">
            <p className="text-11 tracking-caps text-slate uppercase">
              Playfair Display · 400 · font-display
            </p>
            <p className="mt-4 font-display text-64 text-ink">
              Objetos com <em className="text-coral">a marca</em> das mãos.
            </p>
            <p className="mt-6 font-display text-48 text-ink">
              Peças que levam tempo
            </p>
          </div>

          <div className="mt-6 rounded-card border border-border bg-bridal p-8">
            <p className="text-11 tracking-caps text-slate uppercase">
              Inter · 400 / 500 · font-sans
            </p>
            <div className="mt-5 divide-y divide-border">
              {ESCALA.map((item) => (
                <div
                  key={item.classe}
                  className="flex flex-col gap-2 py-4 tablet:flex-row tablet:items-baseline tablet:gap-8"
                >
                  <p className="w-[140px] shrink-0 text-11 text-slate">
                    {item.classe} · {item.tamanho}/{item.lh}
                    {item.ls ? ` · ${item.ls}` : ''}
                  </p>
                  <p
                    className={`${item.classe} ${
                      item.tamanho === '48px' || item.tamanho === '64px'
                        ? 'font-display'
                        : ''
                    } text-ink`}
                  >
                    Cerâmica, têxteis e madeira
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Secao>

        <Secao numero="04" titulo="Letter-spacing">
          <div className="rounded-card border border-border bg-bridal p-8">
            <div className="divide-y divide-border">
              {TRACKINGS.map((t) => (
                <div
                  key={t.nome}
                  className="flex flex-col gap-1 py-3 tablet:flex-row tablet:items-baseline tablet:gap-8"
                >
                  <p className="w-[190px] shrink-0 text-11 text-slate">
                    {t.nome} · {t.valor}
                  </p>
                  <p className={`${t.classe} text-14 text-ink uppercase`}>
                    Coleção outono · 2026
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Secao>

        <Secao numero="05" titulo="Raios e sombras">
          <div className="flex flex-wrap gap-6">
            {RAIOS.map((r) => (
              <div key={r.nome}>
                <div
                  className={`${r.classe} size-24 border border-border bg-ecru`}
                />
                <p className="mt-3 text-12 text-ink">{r.nome}</p>
                <p className="text-11 text-slate">{r.valor}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-14 text-ink-70">
            Passe o mouse no card — <code>shadow-card-hover</code>, 200ms ease:
          </p>
          <div className="mt-4 flex flex-wrap gap-6">
            <div className="card-hover w-[260px] rounded-card border border-border bg-bridal p-6">
              <div className="h-28 rounded-button bg-ecru" />
              <p className="mt-4 text-14 font-medium text-ink">Vaso Areia Bruta</p>
              <p className="text-12 text-slate">Ana Vasconcellos</p>
              <p className="mt-2 text-14 text-coral">R$ 320,00</p>
            </div>
            <div className="w-[260px] rounded-card bg-bridal p-6 shadow-cta">
              <p className="text-12 tracking-caps text-slate uppercase">
                shadow-cta
              </p>
              <p className="mt-2 text-14 text-ink-70">
                Sombra dos botões primários do hero.
              </p>
            </div>
          </div>
        </Secao>

        <Secao numero="06" titulo="Grid — 12 colunas, gutter 24px">
          <p className="text-14 text-ink-70">
            Container 1200px máx · margem lateral 24px · gutter 24px.
          </p>
          <div className="mt-5 grid-page">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-24 rounded-button bg-coral/15 text-center text-11 leading-[96px] text-coral"
              >
                {i + 1}
              </div>
            ))}
          </div>

          <p className="mt-8 text-14 text-ink-70">
            Exemplos de span (o grid de produto usa 3 colunas por card):
          </p>
          <div className="mt-4 grid-page">
            <div className="col-span-12 h-16 rounded-button bg-sage-30 text-center text-11 leading-[64px] text-ink">
              col-span-12
            </div>
            <div className="col-span-6 h-16 rounded-button bg-sage-30 text-center text-11 leading-[64px] text-ink">
              col-span-6
            </div>
            <div className="col-span-6 h-16 rounded-button bg-sage-30 text-center text-11 leading-[64px] text-ink">
              col-span-6
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="col-span-3 h-16 rounded-button bg-blush-40 text-center text-11 leading-[64px] text-ink"
              >
                col-span-3
              </div>
            ))}
          </div>
        </Secao>

        <Secao numero="07" titulo="Breakpoints">
          <div className="rounded-card border border-border bg-bridal p-8">
            <p className="text-16 text-ink">
              Largura atual:
              <span className="ml-2 font-medium text-coral tablet:hidden">
                mobile (≤767px)
              </span>
              <span className="ml-2 hidden font-medium text-coral tablet:inline desktop:hidden">
                tablet (768–1023px)
              </span>
              <span className="ml-2 hidden font-medium text-coral desktop:inline">
                desktop (≥1024px)
              </span>
            </p>
            <p className="mt-3 text-12 text-slate">
              Redimensione a janela para conferir. Prefixos disponíveis:{' '}
              <code>tablet:</code> e <code>desktop:</code>.
            </p>
          </div>
        </Secao>

        <Secao numero="08" titulo="Button">
          <div className="space-y-8 rounded-card border border-border bg-bridal p-8">
            {BOTOES.map((b) => (
              <div key={b.variant}>
                <p className="mb-4 text-12 uppercase tracking-caps text-slate">
                  {b.rotulo}
                </p>
                <div className="flex flex-wrap items-center gap-8">
                  <Estado nome="default">
                    <Button variant={b.variant}>Explorar coleção</Button>
                  </Estado>
                  <Estado nome="hover (passe o mouse)">
                    <Button variant={b.variant}>Explorar coleção</Button>
                  </Estado>
                  <Estado nome="focus (tab)">
                    <Button variant={b.variant} autoFocus={false}>
                      Explorar coleção
                    </Button>
                  </Estado>
                  <Estado nome="disabled">
                    <Button variant={b.variant} disabled>
                      Explorar coleção
                    </Button>
                  </Estado>
                  <Estado nome="size sm">
                    <Button variant={b.variant} size="sm">
                      Explorar
                    </Button>
                  </Estado>
                  <Estado nome='as="a"'>
                    <Button
                      variant={b.variant}
                      as="a"
                      href="#button"
                      size="sm"
                    >
                      Vira link
                    </Button>
                  </Estado>
                </div>
              </div>
            ))}
            <p className="text-12 text-ink-60">
              O estado <code>active</code> (scale 0.98) aparece ao manter o
              clique pressionado.
            </p>
          </div>
        </Secao>

        <Secao numero="09" titulo="Tag">
          <div className="rounded-card border border-border bg-bridal p-8">
            <div className="flex flex-wrap items-center gap-4">
              {TAGS.map((v) => (
                <Tag key={v} variant={v} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-card bg-ink p-6">
              <span className="text-11 text-cream-60">Sobre foto escura:</span>
              {TAGS.map((v) => (
                <Tag key={v} variant={v} />
              ))}
            </div>
          </div>
        </Secao>

        <Secao numero="10" titulo="Input">
          <div className="grid gap-8 rounded-card border border-border bg-bridal p-8 tablet:grid-cols-2">
            <Estado nome="default">
              <Input label="Email" placeholder="seu@email.com" />
            </Estado>
            <Estado nome="preenchido">
              <Input label="Email" defaultValue="mariana@exemplo.com" />
            </Estado>
            <Estado nome="password (com olho)">
              <Input label="Senha" type="password" defaultValue="minhasenha" />
            </Estado>
            <Estado nome="com hint">
              <Input
                label="CEP"
                placeholder="01310-100"
                hint="Usamos para calcular o frete."
              />
            </Estado>
            <Estado nome="inválido">
              <Input
                label="Email"
                defaultValue="mariana@"
                invalid
                hint="Informe um email válido."
              />
            </Estado>
            <Estado nome="disabled">
              <Input label="Estado" defaultValue="SP" disabled />
            </Estado>
          </div>
        </Secao>

        <Secao numero="11" titulo="Checkbox">
          <div className="flex flex-wrap gap-10 rounded-card border border-border bg-bridal p-8">
            <Estado nome="default">
              <Checkbox label="Cerâmica" />
            </Estado>
            <Estado nome="marcado">
              <Checkbox label="Joalheria" defaultChecked />
            </Estado>
            <Estado nome="disabled">
              <Checkbox label="Têxteis" disabled />
            </Estado>
            <Estado nome="marcado + disabled">
              <Checkbox label="Madeira" defaultChecked disabled />
            </Estado>
            <Estado nome="sem label">
              <Checkbox aria-label="Selecionar" />
            </Estado>
          </div>
        </Secao>

        <Secao numero="12" titulo="Rating">
          <div className="flex flex-col gap-5 rounded-card border border-border bg-bridal p-8">
            <Estado nome="value=5 com count">
              <Rating value={5} count={86} />
            </Estado>
            <Estado nome="value=4.3 (fracionário)">
              <Rating value={4.3} />
            </Estado>
            <Estado nome="value=2.5">
              <Rating value={2.5} />
            </Estado>
            <Estado nome="value=0">
              <Rating value={0} />
            </Estado>
          </div>
        </Secao>

        <Secao numero="13" titulo="Price">
          <div className="flex flex-wrap gap-10 rounded-card border border-border bg-bridal p-8">
            <Estado nome="simples">
              <Price value={128000} />
            </Estado>
            <Estado nome="com preço riscado">
              <Price value={38900} compareAtValue={46000} />
            </Estado>
            <Estado nome="size sm">
              <Price value={46000} compareAtValue={52000} size="sm" />
            </Estado>
            <Estado nome="com centavos">
              <Price value={128050} />
            </Estado>
          </div>
        </Secao>

        <Secao numero="14" titulo="Breadcrumb">
          <div className="rounded-card border border-border bg-bridal p-8">
            <Breadcrumb
              items={[
                { label: 'Início', href: '/' },
                { label: 'Loja', href: '/colecao' },
                { label: 'Joalheria' },
              ]}
            />
          </div>
        </Secao>

        <Secao numero="15" titulo="SectionHeading">
          <div className="space-y-12 rounded-card border border-border bg-bridal p-8">
            <SectionHeading
              eyebrow="Curadoria"
              title="Edições recentes"
              linkHref="/colecao"
            />
            <SectionHeading eyebrow="Quem faz" title="Artesãos em destaque" />
          </div>
        </Secao>

        <Secao numero="16" titulo="ProductCard">
          <p className="mb-6 max-w-[560px] text-14 text-ink-70">
            Node 30:3851. Passe o mouse sobre um card para ver a sombra e o
            botão de favoritar. Os quatro primeiros produtos são exatamente os
            de &ldquo;Edições recentes&rdquo; na Home — o primeiro tem preço
            riscado e badge, o terceiro tem badge &ldquo;Novo&rdquo;.
          </p>
          <ProductGrid products={products.slice(0, 4)} />
        </Secao>

        <Secao numero="17" titulo="ProductGrid — columns">
          <div className="space-y-12">
            {[2, 3, 4].map((columns) => (
              <div key={columns}>
                <p className="mb-4 text-12 tracking-caps text-slate uppercase">
                  columns={columns}
                </p>
                <ProductGrid
                  products={products.slice(0, columns)}
                  columns={columns}
                />
              </div>
            ))}
          </div>
        </Secao>

        <Secao numero="18" titulo="ArtisanCard">
          <p className="mb-6 max-w-[560px] text-14 text-ink-70">
            Node 30:3909. Imagem quadrada, nome em font-display 20px.
          </p>
          <div className="grid grid-cols-2 gap-6 desktop:grid-cols-4">
            {artisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </Secao>

        <Secao numero="19" titulo="CategoryStrip">
          <p className="mb-6 max-w-[560px] text-14 text-ink-70">
            Node 30:3793. Seis colunas com imagem 3:4 e rótulo centralizado.
          </p>
          <CategoryStrip categories={categories} />
        </Secao>
      </div>
    </div>
  )
}

export default Styleguide
