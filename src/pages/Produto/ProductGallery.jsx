/**
 * Galeria da tela de produto (node 30:4643).
 *
 * Grid interno de 12 colunas com gutter de 12px: a coluna de thumbs ocupa 2
 * (117,77px no design, caixa quadrada) e a imagem principal ocupa as 10
 * restantes, em 4:5 — a mesma proporção do ProductCard.
 *
 * A thumb ativa tem borda de 2px em coral (30:4645); as demais têm a mesma
 * borda em transparente, para a troca não mexer no layout. O node declara
 * borda de 2px E padding de 2px, mas a caixa interna (113,77px) é só 4px menor
 * que a externa (117,77px) — só um dos dois consome layout, então aqui é só a
 * borda.
 *
 * DIVERGÊNCIA DO DESIGN: o Figma mostra quatro thumbs, mas o mock guarda duas
 * imagens por peça (src/data/products.js). A coluna renderiza uma thumb por
 * item de `images` — quando o mock ganhar mais fotos, as quatro aparecem sem
 * mudar este arquivo.
 */

import { useState } from 'react'

function ProductGallery({ images, alt, className = '' }) {
  const [ativa, setAtiva] = useState(0)

  return (
    <div
      className={['grid gap-3 desktop:grid-cols-12', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="order-2 flex gap-3 desktop:order-1 desktop:col-span-2 desktop:flex-col">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Ver imagem ${i + 1} de ${images.length}`}
            aria-current={i === ativa}
            onClick={() => setAtiva(i)}
            className={[
              'aspect-square w-full overflow-hidden rounded-[22px] border-2',
              'transition-colors duration-200 ease-out',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
              i === ativa
                ? 'border-coral'
                : 'border-transparent hover:border-ink-15',
            ].join(' ')}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="size-full rounded-[20px] object-cover"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[38px] bg-ecru desktop:order-2 desktop:col-span-10">
        <img
          src={images[ativa]}
          alt={alt}
          className="aspect-4/5 w-full object-cover"
        />
      </div>
    </div>
  )
}

export default ProductGallery
