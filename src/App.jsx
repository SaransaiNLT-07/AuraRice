import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import ProductDialog from './components/ProductDialog.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import WaysToOrder from './components/WaysToOrder.jsx'
import FarmersSection from './components/FarmersSection.jsx'
import Certification from './components/Certification.jsx'
import StorySection from './components/StorySection.jsx'
import Footer from './components/Footer.jsx'
import { ALL_CATEGORY, CATEGORIES, products } from './data/products.js'
import './App.css'

const GRID_ID = 'product-grid'

function App() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY)
  const [selectedProductId, setSelectedProductId] = useState(null)
  // { [productId]: quantity }. Kept in memory only for now.
  const [cartItems, setCartItems] = useState({})
  const [cartOpen, setCartOpen] = useState(false)

  const visibleProducts = useMemo(
    () =>
      activeCategory === ALL_CATEGORY
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  )

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) ?? null,
    [selectedProductId],
  )

  const cartLines = useMemo(
    () =>
      products
        .filter((product) => cartItems[product.id] > 0)
        .map((product) => ({ product, quantity: cartItems[product.id] })),
    [cartItems],
  )

  const cartCount = cartLines.reduce((total, line) => total + line.quantity, 0)

  const handleAddToCart = (productId) => {
    setCartItems((items) => ({ ...items, [productId]: (items[productId] ?? 0) + 1 }))
  }

  const handleSetQuantity = (productId, quantity) => {
    setCartItems((items) => {
      const next = { ...items }
      if (quantity > 0) next[productId] = quantity
      else delete next[productId]
      return next
    })
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main id="main">
        <Hero />
        <HowItWorks />

        <section
          id="collection"
          className="section collection"
          aria-labelledby="collection-title"
        >
          <div className="container">
            <header className="section-header">
              <p className="eyebrow">The collection</p>
              <h2 id="collection-title" className="section-title">
                Straight from certified farms
              </h2>
              <p className="section-lede">
                Every product below is grown by an RaithuBazzar-certified farmer,
                tested batch by batch and sold to you directly — no traders or
                wholesalers in between. The region on each pack is where it was
                grown.
              </p>
            </header>

            <CategoryFilter
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              controlsId={GRID_ID}
            />

            <ProductGrid
              id={GRID_ID}
              products={visibleProducts}
              labelledBy={`tab-${activeCategory}`}
              onViewDetails={setSelectedProductId}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>

        <WaysToOrder />
        <FarmersSection />
        <Certification />
        <StorySection />
      </main>
      <Footer />
      <ProductDialog
        product={selectedProduct}
        onClose={() => setSelectedProductId(null)}
        onAddToCart={handleAddToCart}
      />
      <CartDrawer
        open={cartOpen}
        lines={cartLines}
        onClose={() => setCartOpen(false)}
        onSetQuantity={handleSetQuantity}
      />
    </>
  )
}

export default App
