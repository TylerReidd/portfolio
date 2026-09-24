import { siteConfig } from '../data/content'

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="/">{siteConfig.name}</a>
        <p>Web development, technical help, and music instruction.</p>
      </div>
      <div className="footer-links">
        <a href="/#services">Services</a>
        <a href="/lessons">Guitar lessons</a>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {siteConfig.name}</p>
    </footer>
  )
}

export default Footer
