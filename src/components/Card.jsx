/**
 * Reusable card for Vision, Commitment, Beliefs sections.
 * Accepts title and description as props.
 */
function Card({ title, description }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Card
