const STEPS = [
  {
    title: 'We certify the farmer',
    text: 'Every grower is visited and assessed by our team before they can sell on RaithuBazzar. We review how the crop is grown, harvested, dried and stored, and only farmers who meet our standard are certified.',
  },
  {
    title: 'Each harvest is tested',
    text: 'Every lot is sampled and tested for moisture, purity and aroma. A lot that falls short goes back to the farmer — it is never blended away or sold under our name.',
  },
  {
    title: 'Packed and sealed at source',
    text: 'Approved lots are packed in small batches and sealed with their growing region on the pack, so nothing is mixed, repacked or relabelled on its way to you.',
  },
  {
    title: 'Sold directly to you',
    text: 'You buy the certified harvest straight from the farm through RaithuBazzar. No commission agents, no traders, no wholesalers — just the grower, our standard and your kitchen.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="section how" aria-labelledby="how-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title" className="section-title">
            One short, honest chain from farm to kitchen
          </h2>
          <p className="section-lede">
            RaithuBazzar is a direct marketplace. We do not trade in commodity lots —
            we certify individual farmers, verify every harvest they bring to us,
            and connect it directly with the buyers who value it.
          </p>
        </header>

        <ol className="steps">
          {STEPS.map((step, position) => (
            <li key={step.title} className="step">
              <span className="step__number" aria-hidden="true">
                {String(position + 1).padStart(2, '0')}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
