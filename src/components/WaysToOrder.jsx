const EMAIL = 'aurarice@gmail.com'
const PHONE_DISPLAY = '+91 92488 83361'
const PHONE_HREF = 'tel:+919248883361'

const STEPS = [
  {
    title: 'Choose your products',
    text: 'Browse the collection and add the rice and spices you need to your cart. Every product comes from an AuraRice-certified farmer.',
  },
  {
    title: 'Place your order',
    text: 'Call or email us with your order and delivery address. A member of our team takes every order personally.',
  },
  {
    title: 'We confirm the details',
    text: 'We confirm availability, delivery charges and payment with you before anything is dispatched — no surprises on the final amount.',
  },
  {
    title: 'Delivered from source',
    text: 'Your order is packed and sealed at source from tested, certified harvests and sent directly to your door.',
  },
]

const CHANNELS = [
  {
    title: 'Order by phone',
    text: 'Speak to our team about products, quantities and delivery.',
    href: PHONE_HREF,
    linkText: PHONE_DISPLAY,
  },
  {
    title: 'Order by email',
    text: 'Send us the products, quantities and your delivery address.',
    href: `mailto:${EMAIL}?subject=${encodeURIComponent('AuraRice order')}`,
    linkText: EMAIL,
  },
  {
    title: 'Bulk and business orders',
    text: 'Restaurants, caterers and retailers can buy directly from certified farms in larger quantities.',
    href: `mailto:${EMAIL}?subject=${encodeURIComponent('AuraRice bulk order enquiry')}`,
    linkText: 'Enquire about bulk orders',
  },
]

function WaysToOrder() {
  return (
    <section id="how-to-order" className="section ways" aria-labelledby="ways-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">A way to order</p>
          <h2 id="ways-title" className="section-title">
            Simple, personal ordering
          </h2>
          <p className="section-lede">
            Every order is confirmed by a person, not an algorithm — so you always
            know what you are paying for and which farm it is coming from.
          </p>
        </header>

        <ol className="ways__steps">
          {STEPS.map((step, position) => (
            <li key={step.title} className="ways__step">
              <span className="ways__number" aria-hidden="true">
                {position + 1}
              </span>
              <div>
                <h3 className="ways__title">{step.title}</h3>
                <p className="ways__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="ways__channels">
          {CHANNELS.map((channel) => (
            <li key={channel.title} className="ways__channel">
              <h3 className="ways__channel-title">{channel.title}</h3>
              <p className="ways__channel-text">{channel.text}</p>
              <a className="ways__link" href={channel.href}>
                {channel.linkText}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WaysToOrder
