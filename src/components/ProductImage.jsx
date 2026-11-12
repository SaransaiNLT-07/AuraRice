import { useState } from 'react'

// Product photo with a styled fallback if the file is missing or fails to load.
function ProductImage({ product, className, loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)
  const altText = `${product.name}, ${product.weight} pack from ${product.origin}`

  if (failed) {
    return (
      <div className="product-image-placeholder" role="img" aria-label={altText}>
        <span aria-hidden="true">{product.category}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={product.image}
      alt={altText}
      loading={loading}
      decoding="async"
      width="1000"
      height="1250"
      onError={() => setFailed(true)}
    />
  )
}

export default ProductImage
