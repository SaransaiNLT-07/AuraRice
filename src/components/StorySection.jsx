import { SOURCING_REGIONS } from '../data/products.js'

function StorySection() {
  return (
    <section id="story" className="section story" aria-labelledby="story-title">
      <div className="container story__inner">
        <p className="eyebrow eyebrow--light">Our story</p>
        <h2 id="story-title" className="section-title story__title">
          Built to close the distance between farm and kitchen
        </h2>
        <p className="story__text">
          In India, rice and spices often change hands four or five times before
          they reach a kitchen — from farmer to commission agent, trader,
          wholesaler and retailer. Each step adds cost, mixes harvests from
          different farms, and leaves the grower with a smaller share of the
          final price.
        </p>
        <p className="story__text">
          RaithuBazzar was founded in 2025 to remove those steps. We work directly
          with certified growers in Telangana, Haryana, Punjab, Andhra Pradesh,
          Kerala and Kashmir, test every batch for moisture, purity and aroma,
          and seal it in small batches at source. Buyers receive produce they can
          trace to its origin; farmers gain a direct route to the people who
          value their work.
        </p>
        <ul className="story__regions" aria-label="Where our certified growers farm">
          {SOURCING_REGIONS.map((region) => (
            <li key={region} className="story__region">
              {region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default StorySection
