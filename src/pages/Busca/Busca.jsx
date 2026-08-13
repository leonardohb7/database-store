/**
 * Tela Busca (/busca) — node 30:6058.
 *
 * Bloco de entrada de 672px (`div.max-w-2xl`) com título, campo e chips de
 * sugestão; 56px abaixo (`div.mt-14`), a contagem, o título "Peças" e o grid.
 *
 * ESTADO DO TERMO: a query string `?q=` é a fonte da verdade dos RESULTADOS —
 * mesma escolha da tela de coleção, e o que faz link colado e voltar/avançar
 * do navegador funcionarem. O `useState` local existe só para o campo
 * responder à tecla na hora; ele é espelhado na URL 250ms depois da última
 * digitação (debounce), para não empilhar uma entrada de histórico por letra.
 * Ou seja: a URL já é o termo "com debounce" — daí os resultados saírem dela.
 *
 * O node mostra "Peças" como h2.font-display 24px em caixa mista, e não um
 * eyebrow em caixa alta; seguimos o node, conforme confirmado.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import ProductGrid from '../../components/product/ProductGrid.jsx'
import IconBusca from '../../components/ui/icons/IconBusca.jsx'
import IconFechar from '../../components/ui/icons/IconFechar.jsx'
import products from '../../data/products.js'
import searchProducts from './searchProducts.js'

/** Sugestões do node 30:6071 — os rótulos são o próprio termo buscado. */
const sugestoes = [
  'Vaso cerâmica',
  'Argolas prata',
  'Manta lã',
  'Mesa madeira',
  'Linho cru',
]

const DEBOUNCE_MS = 250

function Busca() {
  const [searchParams, setSearchParams] = useSearchParams()
  const termoDaUrl = searchParams.get('q') ?? ''

  const [termo, setTermo] = useState(termoDaUrl)
  const campoRef = useRef(null)

  /* Último valor que ESTA tela escreveu na URL. Serve para distinguir a
     mudança que veio da digitação daquela que veio de fora (voltar/avançar). */
  const ultimoEnviado = useRef(termoDaUrl)

  useEffect(() => {
    if (termo === ultimoEnviado.current) return

    const timer = setTimeout(() => {
      ultimoEnviado.current = termo

      setSearchParams(
        (anteriores) => {
          const proximos = new URLSearchParams(anteriores)

          if (termo) {
            proximos.set('q', termo)
          } else {
            proximos.delete('q')
          }

          return proximos
        },
        { replace: true },
      )
    }, DEBOUNCE_MS)

    return () => clearTimeout(timer)
  }, [termo, setSearchParams])

  /* Navegação externa (voltar/avançar, link colado) manda no campo. */
  useEffect(() => {
    if (termoDaUrl === ultimoEnviado.current) return

    ultimoEnviado.current = termoDaUrl
    setTermo(termoDaUrl)
  }, [termoDaUrl])

  const resultados = useMemo(
    () => searchProducts(products, termoDaUrl),
    [termoDaUrl],
  )

  function limpar() {
    setTermo('')
    campoRef.current?.focus()
  }

  return (
    <Container className="flex flex-col gap-14 py-10">
      <div className="flex w-full max-w-[672px] flex-col gap-5">
        {/* O node 30:6064 usa entrelinha 48px, não os 60px do token text-48. */}
        <h1 className="font-display text-48 leading-none text-ink">Buscar</h1>

        <div className="relative pt-1">
          <input
            ref={campoRef}
            type="search"
            value={termo}
            onChange={(event) => setTermo(event.target.value)}
            aria-label="Buscar peças"
            className="h-14 w-full rounded-full border border-coral bg-white px-[57px] font-sans text-16 text-ink transition-shadow duration-200 ease-out [&::-webkit-search-cancel-button]:appearance-none focus:outline-none focus:ring-1 focus:ring-coral"
          />

          {/* `50% + 2px`: o wrapper tem 4px de pt, então o meio dele fica 2px
              acima do meio do campo. É o mesmo calc dos nodes 30:6069/30:6070. */}
          <IconBusca
            width="20"
            height="20"
            className="pointer-events-none absolute left-5 top-[calc(50%+2px)] -translate-y-1/2 text-slate"
          />

          {termo && (
            <button
              type="button"
              onClick={limpar}
              aria-label="Limpar busca"
              className="absolute right-5 top-[calc(50%+2px)] -translate-y-1/2 text-slate transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:text-ink"
            >
              <IconFechar />
            </button>
          )}
        </div>

        {/* O Figma não tem estado de hover; o chip cheio (`sage`, o mesmo
            Locust do fundo a 30%) foi escolhido à mão — ver a nota do token
            de hover em src/index.css. */}
        <div className="flex flex-wrap gap-2">
          {sugestoes.map((sugestao) => (
            <button
              key={sugestao}
              type="button"
              onClick={() => setTermo(sugestao)}
              className="rounded-full bg-sage-30 px-4 py-2 text-12 text-ink transition-colors duration-200 hover:bg-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              {sugestao}
            </button>
          ))}
        </div>
      </div>

      {termoDaUrl && (
        <div className="flex flex-col gap-5">
          <p className="text-14 text-slate">
            {resultados.length}{' '}
            {resultados.length === 1 ? 'resultado' : 'resultados'} para{' '}
            <span className="font-bold text-ink">&quot;{termoDaUrl}&quot;</span>
          </p>

          {resultados.length > 0 ? (
            <>
              <h2 className="pt-1 font-display text-24 tracking-[-0.24px] text-ink">
                Peças
              </h2>

              <ProductGrid products={resultados} columns={4} />
            </>
          ) : (
            /* O node só mostra a busca com resultado; o texto abaixo foi
               escrito para o mock, no tom do estado vazio da coleção. */
            <div className="flex flex-col items-start gap-4 py-10">
              <h2 className="font-display text-24 text-ink">
                Nenhuma peça com esse termo.
              </h2>

              <p className="max-w-[420px] text-16 text-ink-70">
                Tente outra palavra ou percorra a coleção inteira — o acervo é
                pequeno e muda a cada fornada.
              </p>

              <Link
                to="/loja"
                className="text-14 text-ink underline underline-offset-4 transition-colors duration-200 hover:text-coral"
              >
                Ver toda a coleção
              </Link>
            </div>
          )}
        </div>
      )}
    </Container>
  )
}

export default Busca
