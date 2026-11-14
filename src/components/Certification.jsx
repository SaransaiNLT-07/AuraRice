const STANDARDS = [
  {
    title: 'Verified in person',
    text: 'We know every certified farmer by name and by field. Land, growing practices and post-harvest handling are checked on the farm before certification is granted.',
  },
  {
    title: 'Tested, every batch',
    text: 'Certification opens the door; it does not replace testing. Each harvest is checked for moisture, purity and aroma before a single pack is sealed.',
  },
  {
    title: 'Traceable to origin',
    text: 'Every product carries the region it was grown in. What you buy comes from certified farms in that region — never from an anonymous mandi lot.',
  },
  {
    title: 'Earned, then kept',
    text: 'Certification is reviewed on an ongoing basis. Growers who no longer meet the RaithuBazzar standard are removed from the platform.',
  },
]

const APPLY_HREF =
  'mailto:RaithuBazzar@gmail.com?subject=' + encodeURIComponent('RaithuBazzar farmer certification enquiry')

function Certification() {
  return (
    <section id="certification" className="section certification" aria-labelledby="certification-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">RaithuBazzar Certified</p>
          <h2 id="certification-title" className="section-title">
            A standard farmer earns — and keeps earning
          </h2>
          <p className="section-lede">
            Only farmers certified by RaithuBazzar can sell on this platform.
            Certification is not a label we sell or a fee a grower pays to be
            listed. It is our promise to you about who grew your food and how.
          </p>
        </header>

        <ul className="standards">
          {STANDARDS.map((standard) => (
            <li key={standard.title} className="standard">
              <h3 className="standard__title">{standard.title}</h3>
              <p className="standard__text">{standard.text}</p>
            </li>
          ))}
        </ul>

        <aside className="farmer-cta" aria-labelledby="farmer-cta-title">
          <div>
            <h3 id="farmer-cta-title" className="farmer-cta__title">
              Are you a grower?
            </h3>
            <p className="farmer-cta__text">
              If you farm premium rice or spices and want to sell directly to
              buyers who value quality, apply for RaithuBazzar certification. Our team
              will get in touch to arrange a farm visit.
            </p>
          </div>
          <a className="button button--primary" href={APPLY_HREF}>
            Apply for certification
          </a>
        </aside>
      </div>
    </section>
  )
}

export default Certification
