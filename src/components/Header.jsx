import { siteConfig } from '../data/content'

function Header({ lessonPage = false }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <a className="brand" href="/" aria-label="Tyler Reid home">{siteConfig.name}</a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href={lessonPage ? '/#services' : '#services'}>Services</a>
        <a href={lessonPage ? '/#work' : '#work'}>Work</a>
        <a href={lessonPage ? '/#about' : '#about'}>About</a>
        <a href="/lessons" aria-current={lessonPage ? 'page' : undefined}>Lessons</a>
        <a href={lessonPage ? '/#contact' : '#contact'}>Contact</a>
      </nav>
      <a className="header-cta" href={lessonPage ? '/#contact' : '#contact'}>Get a quote <span aria-hidden="true">↗</span></a>
    </header>
  )
}

export default Header
