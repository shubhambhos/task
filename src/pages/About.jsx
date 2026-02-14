import Card from '../components/Card'
import FAQItem from '../components/FAQItem'

const cardData = [
  {
    title: 'Vision',
    description:
      'At Wyreflow, our vision is to lead the digital transformation journey by delivering innovative solutions that empower businesses to thrive in a dynamic world. We aim to drive growth, efficiency, and sustainability through cutting-edge technology and strategic insights.',
  },
  {
    title: 'Commitment',
    description:
      'We prioritize enduring partnerships that drive innovation, growth, and long-term success for all involved. We foster lasting relationships that create sustainable outcomes and mutual growth.',
  },
  {
    title: 'Beliefs',
    description:
      'Our guiding beliefs in integrity, excellence, and innovation drive our commitment to achieving impactful results and building lasting trust. We are committed to the impact we have on every life we touch.',
  },
]

const faqData = [
  {
    question: 'What does Wyreflow do?',
    answer:
      'Wyreflow offers a range of services including application services, ITES, mobility, cloud, big data, machine learning, and AI.',
  },
  {
    question: 'What is the future for Wyreflow?',
    answer:
      'Wyreflow is constantly innovating and expanding its services to meet the needs of both US clients and government projects.',
  },
  {
    question: 'How can Wyreflow help my business grow?',
    answer:
      'By leveraging cutting-edge technology, Wyreflow can provide tailored solutions that help businesses scale and succeed in their respective industries.',
  },
  {
    question: 'What industries does Wyreflow serve?',
    answer:
      'Wyreflow serves various industries including healthcare, finance, manufacturing, and more.',
  },
]

function About() {
  return (
    <>
      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <h1>Building Digital Pathways for Success</h1>
          <p>
            At Wyreflow, we create innovative digital solutions that drive growth
            and transform your business for long-term success.
          </p>
        </div>
      </section>

      {/* Cards: Vision, Commitment, Beliefs */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Wyreflow at a Glance</h2>
          <div className="cards-wrapper">
            {cardData.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <div className="container">
          <h2>Where Technology Meets Vision</h2>
          <p>Combining technology and vision to drive innovation and growth.</p>
          <a href="https://wyreflow.com/pages-html/career.html" target="_blank" rel="noopener noreferrer">
            Join us
          </a>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
