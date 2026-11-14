import { SOURCING_REGIONS } from '../data/products.js'

const STATS = [
  { value: '100%', label: 'RaithuBazzar-certified farmers' },
  { value: '0', label: 'Middlemen in between' },
  { value: String(SOURCING_REGIONS.length), label: 'Growing regions' },
]

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--light">Direct from certified farmers · Since 2025</p>
        <h1 id="hero-title" className="hero__title">
          From certified farms, <em>straight to your kitchen.</em>
        </h1>
        <p className="hero__lede">
          RaithuBazzar connects you directly with farmers we have certified
          ourselves. Premium rice and spices, tested batch by batch and sold
          without traders or wholesalers in between — so you know exactly where
          your food comes from, and more of what you pay reaches the people who
          grew it.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#collection">
            Explore the collection
          </a>
          <a className="button button--ghost" href="#how-it-works">
            How it works
          </a>
        </div>

        <ul className="hero__stats" aria-label="Why RaithuBazzar">
          {STATS.map((stat) => (
            <li key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
