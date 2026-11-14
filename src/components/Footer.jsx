function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">RaithuBazzar</p>
          <p className="site-footer__tagline">Rice and spices, refined at the source.</p>
        </div>

        <address className="site-footer__contact">
          <a href="mailto:RaithuBazzar@gmail.com">RaithuBazzar@gmail.com</a>
          <a href="tel:+919248883361">+91 92488 83361</a>
          <span>Hyderabad, Telangana</span>
        </address>
      </div>

      <div className="container">
        <p className="site-footer__copyright">© {year} RaithuBazzar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
  