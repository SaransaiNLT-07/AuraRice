import ProductCard from './ProductCard.jsx'

function ProductGrid({ id, products, labelledBy, onViewDetails, onAddToCart }) {
  return (
    <div id={id} role="tabpanel" aria-labelledby={labelledBy} className="product-panel">
      {products.length === 0 ? (
        <p className="empty-state" role="status">
          Nothing here just yet. Our next harvest is on its way — please check
          back soon.
        </p>
      ) : (
        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.id} className="product-grid__item">
              <ProductCard
                product={product}
                onViewDetails={onViewDetails}
                onAddToCart={onAddToCart}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductGrid
