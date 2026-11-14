import { useEffect, useRef } from 'react'
import ProductImage from './ProductImage.jsx'
import FarmerCredit from './FarmerCredit.jsx'
import { farmerByProductId } from '../data/farmers.js'
import { formatPrice } from '../utils/format.js'

// Native <dialog>: showModal() gives us focus trapping, Escape to close and
// focus return to the opening button for free.
function ProductDialog({ product, onClose, onAddToCart }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (product && !dialog.open) dialog.showModal()
    if (!product && dialog.open) dialog.close()
  }, [product])

  // A click on the backdrop lands on the <dialog> element itself.
  const handleClick = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close()
  }

  const farmer = product ? farmerByProductId.get(product.id) : undefined

  return (
    <dialog
      ref={dialogRef}
      className="product-dialog"
      aria-labelledby="product-dialog-title"
      onClose={onClose}
      onClick={handleClick}
    >
      {product && (
        <div className="product-dialog__layout">
          <div className="product-dialog__media">
            <ProductImage key={product.id} product={product} className="product-dialog__image" loading="eager" />
          </div>

          <div className="product-dialog__body">
            <button
              type="button"
              className="product-dialog__close"
              aria-label="Close product details"
              onClick={() => dialogRef.current.close()}
            >
              <span aria-hidden="true">×</span>
            </button>

            <p className="product-card__origin">{product.origin}</p>
            <h2 id="product-dialog-title" className="product-dialog__title">
              {product.name}
            </h2>
            <p className="product-dialog__price">
              {formatPrice(product.price)}
              <span className="product-dialog__weight"> · {product.weight}</span>
            </p>
            <p className="product-dialog__description">{product.description}</p>

            <div className="product-dialog__farmer">
              <FarmerCredit farmer={farmer} />
              {farmer && (
                <>
                  <p className="product-dialog__farmer-meta">
                    {farmer.location} · RaithuBazzar Certified since {farmer.certifiedSince}
                  </p>
                  <p className="product-dialog__farmer-story">{farmer.story}</p>
                </>
              )}
            </div>

            <ul className="product-dialog__assurances" aria-label="Quality assurances">
              <li>Tested for moisture, purity and aroma</li>
              <li>Packed and sealed at source</li>
              <li>Sold directly — no middlemen</li>
            </ul>

            <button
              type="button"
              className="button button--card"
              onClick={() => {
                onAddToCart(product.id)
                dialogRef.current.close()
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default ProductDialog
