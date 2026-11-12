import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#collection', label: 'Collection' },
  { href: '#how-to-order', label: 'How to order' },
  { href: '#farmers', label: 'Farmers' },
  { href: '#certification', label: 'Certification' },
  { href: '#story', label: 'Our Story' },
  { href: '#contact', label: 'Contact' },
]

const MENU_ID = 'site-menu'

function Header({ cartCount, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the phone menu with Escape.
  useEffect(() => {
    if (!menuOpen) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="AuraRice — back to top" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            AR
          </span>
          <span className="brand__name">AuraRice</span>
        </a>

        <div className="site-header__actions">
          <button
            type="button"
            className="cart-indicator"
            onClick={() => {
              closeMenu()
              onOpenCart()
            }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path
                d="M6 7h12l-1 13H7L6 7zm3 0V6a3 3 0 0 1 6 0v1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            {cartCount > 0 && (
              <span className="cart-indicator__count" aria-hidden="true">
                {cartCount}
              </span>
            )}
            <span className="visually-hidden">
              View cart, {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </span>
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__icon" aria-hidden="true" />
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        <nav
          id={MENU_ID}
          className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="site-nav__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
