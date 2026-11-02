import { useEffect, useId, useRef, useState } from 'react'

function ScreenshotViewer({ title, images, initialIndex, opener, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const dialogRef = useRef(null)
  const titleId = useId()
  const captionId = useId()
  const current = images[index]

  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [opener])

  function move(direction) {
    setIndex((previous) => (previous + direction + images.length) % images.length)
  }

  return (
    <dialog
      ref={dialogRef}
      className="screenshot-dialog"
      aria-labelledby={titleId}
      aria-describedby={captionId}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey || images.length < 2) return
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          move(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}
    >
      <div className="screenshot-panel">
        <div className="screenshot-header">
          <h2 id={titleId}>{title} <span>/ Screenshots</span></h2>
          <button type="button" className="gallery-control" onClick={onClose} autoFocus>Close <span aria-hidden="true">×</span></button>
        </div>
        <figure className="screenshot-figure">
          <div className="screenshot-stage"><img key={current.src} src={current.src} alt={current.alt} /></div>
          <figcaption id={captionId} aria-live="polite" aria-atomic="true">
            <span className="screenshot-count">{index + 1} / {images.length}</span>
            {current.caption || current.alt}
          </figcaption>
        </figure>
        {images.length > 1 && (
          <div className="screenshot-navigation" aria-label="Screenshot navigation">
            <button type="button" className="gallery-control" onClick={() => move(-1)}><span aria-hidden="true">←</span> Previous</button>
            <button type="button" className="gallery-control" onClick={() => move(1)}>Next <span aria-hidden="true">→</span></button>
          </div>
        )}
      </div>
    </dialog>
  )
}

function ProjectGallery({ title, images }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const openerRef = useRef(null)
  const cover = images[0]

  function openGallery(event, index) {
    openerRef.current = event.currentTarget
    setActiveIndex(index)
  }

  if (!cover) return <div className="project-image"><span>Project screenshot</span></div>

  return (
    <div className="project-visual">
      <button type="button" className="project-image project-image-button" onClick={(event) => openGallery(event, 0)} aria-label={`Enlarge ${title} screenshot`} aria-haspopup="dialog">
        <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" />
        <span className="project-image-hint" aria-hidden="true">Enlarge ↗</span>
      </button>
      {images.length > 1 && (
        <button type="button" className="gallery-link" onClick={(event) => openGallery(event, 1)} aria-haspopup="dialog" aria-label={`View more screenshots of ${title}`}>
          View more screenshots <span aria-hidden="true">↗</span>
        </button>
      )}
      {activeIndex !== null && <ScreenshotViewer title={title} images={images} initialIndex={activeIndex} opener={openerRef.current} onClose={() => setActiveIndex(null)} />}
    </div>
  )
}

export default ProjectGallery
