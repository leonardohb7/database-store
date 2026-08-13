/**
 * Tela Coleção (/loja) — node 30:4277.
 *
 * Duas colunas: sidebar de filtros de 310px e, com 40px de gutter, a área de
 * produtos de 1010px. A sidebar some abaixo de desktop (`aside.hidden`).
 *
 * ESTADO DOS FILTROS: a query string é a única fonte da verdade — não há
 * `useState` espelhando a seleção. `useSearchParams` já re-renderiza a tela a
 * cada mudança, então duplicar em estado local só criaria chance de
 * dessincronizar (e quebraria voltar/avançar do navegador e link colado). A
 * filtragem é sem reload porque `setSearchParams` navega dentro do router.
 *
 * DIVERGÊNCIA DO DESIGN: o grid do Figma tem 3 colunas de 323px com gutter de
 * 20px/48px; aqui são 4 colunas com o gutter padrão de 24px do ProductGrid,
 * conforme pedido.
 */

import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import ProductGrid from '../../components/product/ProductGrid.jsx'
import Breadcrumb from '../../components/ui/Breadcrumb.jsx'
import Button from '../../components/ui/Button.jsx'
import {
  categoryFilter,
  materials,
  priceRanges,
  regions,
} from '../../data/filters.js'
import products from '../../data/products.js'
import filterProducts from './filterProducts.js'
import FilterSidebar from './FilterSidebar.jsx'
import Pagination from './Pagination.jsx'
import SortSelect from './SortSelect.jsx'

/**
 * `key` é também o nome do parâmetro na URL. `categoria` já era usado pelos
 * links da CategoryStrip da Home (/loja?categoria=ceramica), então continua.
 */
const grupos = [
  { key: 'categoria', label: 'Categoria', options: categoryFilter },
  { key: 'preco', label: 'Preço', options: priceRanges },
  { key: 'material', label: 'Material', options: materials },
  { key: 'regiao', label: 'Região', options: regions },
]

function Colecao() {
  const [searchParams, setSearchParams] = useSearchParams()

  /* 'a,b' → ['a', 'b'] e '' → [] (split de string vazia devolve ['']). */
  const selecao = useMemo(
    () =>
      Object.fromEntries(
        grupos.map(({ key }) => [
          key,
          (searchParams.get(key) ?? '').split(',').filter(Boolean),
        ]),
      ),
    [searchParams],
  )

  const filtrados = useMemo(() => filterProducts(products, selecao), [selecao])

  const temFiltro = grupos.some(({ key }) => selecao[key].length > 0)

  function aplicarGrupo(key, valores) {
    const proximos = new URLSearchParams(searchParams)

    if (valores.length) {
      proximos.set(key, valores.join(','))
    } else {
      proximos.delete(key)
    }

    setSearchParams(proximos, { replace: true })
  }

  function alternar(key, id) {
    /* "Todas" não entra na URL: ele é o grupo categoria vazio. */
    if (key === 'categoria' && id === 'todas') {
      aplicarGrupo('categoria', [])
      return
    }

    const atuais = selecao[key]

    aplicarGrupo(
      key,
      atuais.includes(id)
        ? atuais.filter((valor) => valor !== id)
        : [...atuais, id],
    )
  }

  return (
    <Container className="pb-20 pt-14">
      <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Loja' }]} />

      <header className="mt-10 flex items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-12 uppercase tracking-eyebrow text-slate">
            {filtrados.length} {filtrados.length === 1 ? 'peça' : 'peças'}
          </p>

          <h1 className="font-display text-48 leading-none text-ink">
            Toda a coleção
          </h1>

          <p className="max-w-[512px] text-16 leading-6 text-ink-70">
            Curadoria contínua de objetos feitos à mão por artesãos brasileiros.
          </p>
        </div>

        <SortSelect />
      </header>

      <div className="mt-10 grid gap-10 desktop:grid-cols-[310px_minmax(0,1fr)]">
        <FilterSidebar grupos={grupos} selecao={selecao} onToggle={alternar} />

        <div>
          {filtrados.length > 0 ? (
            <>
              <ProductGrid products={filtrados} columns={4} />
              <Pagination className="mt-16" />
            </>
          ) : (
            /* O design não tem estado vazio; o texto abaixo foi escrito para
               o mock, no tom das outras telas. */
            <div className="flex flex-col items-start gap-4 py-20">
              <h2 className="font-display text-24 text-ink">
                Nenhuma peça com esses filtros.
              </h2>

              <p className="max-w-[420px] text-16 text-ink-70">
                Tente soltar alguma seleção — o acervo é pequeno e muda a cada
                fornada.
              </p>

              {temFiltro && (
                <Button variant="secondary" onClick={() => setSearchParams({})}>
                  Limpar filtros
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Colecao
