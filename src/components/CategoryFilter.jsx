const NAVIGATION_KEYS = ['ArrowLeft', 'ArrowRight', 'Home', 'End']

function CategoryFilter({ categories, activeCategory, onChange, controlsId }) {
  // WAI-ARIA tabs pattern: arrow keys, Home and End move selection and focus.
  const handleKeyDown = (event) => {
    if (!NAVIGATION_KEYS.includes(event.key)) return
    event.preventDefault()

    const currentIndex = categories.indexOf(activeCategory)
    const lastIndex = categories.length - 1
    let nextIndex = currentIndex

    if (event.key === 'ArrowRight') nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1
    if (event.key === 'ArrowLeft') nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = lastIndex

    onChange(categories[nextIndex])
    event.currentTarget.children[nextIndex]?.focus()
  }

  return (
    <div
      className="filter"
      role="tablist"
      aria-label="Filter products by category"
      onKeyDown={handleKeyDown}
    >
      {categories.map((category) => {
        const isActive = category === activeCategory
        return (
          <button
            key={category}
            id={`tab-${category}`}
            type="button"
            role="tab"
            className="filter__tab"
            aria-selected={isActive}
            aria-controls={controlsId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
