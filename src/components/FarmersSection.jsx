import CertifiedSeal from './CertifiedSeal.jsx'
import { farmers } from '../data/farmers.js'

function FarmersSection() {
  return (
    <section id="farmers" className="section farmers" aria-labelledby="farmers-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Meet our farmers</p>
          <h2 id="farmers-title" className="section-title">
            The people behind every pack
          </h2>
          <p className="section-lede">
            Every product on RaithuBazzar can be traced to a named, certified grower.
            When you order, you are buying directly from them.
          </p>
        </header>

        <ul className="farmer-grid">
          {farmers.map((farmer) => (
            <li key={farmer.id}>
              <article className="farmer-card" aria-labelledby={`farmer-${farmer.id}`}>
                <figure className="farmer-card__media">
                  {/* Placeholder stock photo: alt stays empty until it shows the real farmer */}
                  <img
                    className="farmer-card__photo"
                    src={farmer.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="675"
                    style={{ objectPosition: farmer.imagePosition }}
                  />
                  <span className="farmer-card__region">{farmer.location.split(', ').pop()}</span>
                </figure>

                <div className="farmer-card__top">
                  <h3 id={`farmer-${farmer.id}`} className="farmer-card__name">
                    {farmer.name}
                  </h3>
                  <p className="farmer-card__location">{farmer.location}</p>
                </div>

                <p className="farmer-card__story">{farmer.story}</p>

                <ul className="farmer-card__crops" aria-label={`Crops grown by ${farmer.name}`}>
                  {farmer.crops.map((crop) => (
                    <li key={crop} className="farmer-card__crop">
                      {crop}
                    </li>
                  ))}
                </ul>

                <p className="farmer-card__certified">
                  <CertifiedSeal />
                  RaithuBazzar Certified since {farmer.certifiedSince}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FarmersSection
