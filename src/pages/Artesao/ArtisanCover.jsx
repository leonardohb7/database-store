/**
 * Capa full-bleed da tela de artesão (node 30:4931).
 *
 * 660px de altura ocupando toda a largura da viewport — fica fora do
 * Container de propósito. O `-mb-32` é o `mb-[-128px]` do node: é o que faz o
 * conteúdo seguinte subir e o card de identidade sobrepor a base da capa.
 *
 * O overlay é um degradê para o CREAM do fundo (não um escurecimento): opaco
 * embaixo, 20% no meio e transparente no topo, para a capa se dissolver na
 * página. `#fffae800` é o próprio cream com alfa 0 — usar `to-transparent`
 * (preto transparente) sujaria o meio do degradê.
 */

function ArtisanCover({ src, alt }) {
  return (
    <div className="relative -mb-32 h-[660px] min-h-[420px] w-full overflow-hidden">
      <img src={src} alt={alt} className="size-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-t from-cream via-cream-20 via-50% to-[#fffae800]" />
    </div>
  )
}

export default ArtisanCover
