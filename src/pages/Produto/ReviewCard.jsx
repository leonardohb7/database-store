/**
 * Card de avaliação da tela de produto (node 30:4777).
 * Fundo branco, borda de 1px em ink-10, radius de 30px e 29px de padding.
 */

import Rating from '../../components/ui/Rating.jsx'

function ReviewCard({ review, className = '' }) {
  return (
    <article
      className={[
        'rounded-media border border-ink-10 bg-white p-[29px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Rating value={review.rating} size="sm" />

      <h3 className="mt-4 font-display text-18 leading-7 tracking-title text-ink">
        {review.title}
      </h3>

      <p className="mt-2 text-14 leading-[22.75px] text-ink-70">{review.text}</p>

      <p className="mt-5 text-12 text-slate">
        {review.author} · {review.dateLabel}
      </p>
    </article>
  )
}

export default ReviewCard
