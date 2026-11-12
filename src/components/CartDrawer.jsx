import { useEffect, useRef } from 'react'
import ProductImage from './ProductImage.jsx'
import { formatPrice } from '../utils/format.js'

const MAX_QUANTITY = 20

// Slide-in cart built on the native <dialog>: focus trapping, Escape to close
// and focus return to the cart button come for free.
function CartDrawer({ open, lines, onClose, onSetQuantity }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const close = () => dialogRef.current.close()

  // A click on the backdrop lands on the <dialog> element itself.
  const handleClick = (event) => {
    if (event.target === dialogRef.current) close()
  }

  const itemCount = lines.reduce((total, line) => total + line.quantity, 0)
  const subtotal = lines.reduce((total, line) => total + line.product.price * line.quantity, 0)

  return (
    <dialog
      ref={dialogRef}
      className="cart-drawer"
      aria-labelledby="cart-title"
      onClose={onClose}
      onClick={handleClick}
    >
      <div className="cart-drawer__panel">
        <header className="cart-drawer__header">
          <h2 id="cart-title" className="cart-drawer__title">
            Your cart{' '}
            <span className="cart-drawer__count">
              ({itemCount} {itemCount === 1 ? 'item' : 'items'})
            </span>
          </h2>
          <button type="button" className="icon-button" aria-label="Close cart" onClick={close}>
            <span aria-hidden="true">×</span>
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>Your cart is empty.</p>
            <a className="button button--outline" href="#collection" onClick={close}>
              Browse the collection
            </a>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="cart-line">
                  <div className="cart-line__thumb">
                    <ProductImage product={product} className="cart-line__image" />
                  </div>

                  <div className="cart-line__info">
                    <p className="cart-line__origin">{product.origin}</p>
                    <p className="cart-line__name">{product.name}</p>
                    <p className="cart-line__meta">
                      {product.weight} · {formatPrice(product.price)} each
                    </p>

                    <div className="cart-line__controls">
                      <div className="stepper" role="group" aria-label={`Quantity of ${product.name}`}>
                        <button
                          type="button"
                          className="stepper__button"
                          aria-label={`Remove one ${product.name}`}
                          onClick={() => onSetQuantity(product.id, quantity - 1)}
                        >
                          −
                        </button>
                        <span className="stepper__value" aria-live="polite">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          className="stepper__button"
                          aria-label={`Add one more ${product.name}`}
                          disabled={quantity >= MAX_QUANTITY}
                          onClick={() => onSetQuantity(product.id, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-button"
                        aria-label={`Remove ${product.name} from cart`}
                        onClick={() => onSetQuantity(product.id, 0)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="cart-line__total">{formatPrice(product.price * quantity)}</p>
                </li>
              ))}
            </ul>

            <footer className="cart-drawer__footer">
              <p className="cart-drawer__subtotal">
                <span>Subtotal</span>
                <span className="cart-drawer__amount">{formatPrice(subtotal)}</span>
              </p>
              <p className="cart-drawer__note">
                Delivery charges are confirmed by our team when you place your order.
              </p>
              {/* Checkout and payment will connect here once they are built. */}
              <a className="button button--card" href="#how-to-order" onClick={close}>
                How to place your order
              </a>
              <button type="button" className="text-button cart-drawer__continue" onClick={close}>
                Continue shopping
              </button>
            </footer>
          </>
        )}
      </div>
    </dialog>
  )
}

export default CartDrawer
