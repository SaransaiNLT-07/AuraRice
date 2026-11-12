import ProductImage from './ProductImage.jsx'
import FarmerCredit from './FarmerCredit.jsx'
import { farmerByProductId } from '../data/farmers.js'
import { formatPrice } from '../utils/format.js'

function ProductCard({ product, onViewDetails, onAddToCart }) {
  const { id, name, price, weight, origin, description, badge } = product
  const titleId = `product-${id}-title`

  return (
    <article className="product-card" aria-labelledby={titleId}>
      <div className="product-card__media">
        <ProductImage product={product} className="product-card__image" />
        {badge && <span className="product-card__badge">{badge}</span>}
      </div>

      <div className="product-card__body">
        <p className="product-card__origin">{origin}</p>
        <h3 id={titleId} className="product-card__name">
          {name}
        </h3>
        <FarmerCredit farmer={farmerByProductId.get(id)} />
        <p className="product-card__description">{description}</p>

        <div className="product-card__footer">
          <p className="product-card__meta">
            <span className="product-card__weight">{weight}</span>
            <span className="product-card__price">{formatPrice(price)}</span>
          </p>
          <div className="product-card__actions">
            <button
              type="button"
              className="button button--outline"
              aria-label={`View details: ${name}`}
              onClick={() => onViewDetails(id)}
            >
              View details
            </button>
            <button
              type="button"
              className="button button--card"
              aria-label={`Add to cart: ${name}, ${weight}`}
              onClick={() => onAddToCart(id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
