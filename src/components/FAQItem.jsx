import { useState } from 'react'

/**
 * Single FAQ item - toggles answer visibility on click.
 * Accepts question and answer as props.
 */
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        {question}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQItem
