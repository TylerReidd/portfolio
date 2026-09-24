function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <div className="section-intro-copy">{children}</div>}
    </div>
  )
}

export default SectionIntro
