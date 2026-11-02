import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionIntro from '../components/SectionIntro'
import { lessonTopics } from '../data/content'

function LessonsPage() {
  return (
    <div className="site-shell">
      <Header lessonPage />
      <main id="main-content" tabIndex={-1}>
        <section className="lesson-hero page-section"><p className="eyebrow">Music instruction <span>/</span> For curious players</p><h1>Private Guitar Lessons</h1><p>Practical, personalized guitar instruction built around the music you actually want to play.</p><a className="button button-dark" href="/#contact">Ask about lessons <span aria-hidden="true">↗</span></a></section>
        <section className="page-section lesson-audience"><SectionIntro eyebrow="A good fit for" title="Who Lessons Are For" /><ul className="large-list"><li>Complete beginners</li><li>Intermediate players who feel stuck</li><li>Advanced players refining technique or theory</li><li>Adults returning to guitar</li><li>Teens and younger students</li></ul></section>
        <section className="lesson-topics-band"><div className="page-section lesson-topics"><SectionIntro eyebrow="We can follow your curiosity" title="What We Can Work On" /><div className="topic-grid">{lessonTopics.map((topic, index) => <div className="topic" key={topic}><span>{String(index + 1).padStart(2, '0')}</span><strong>{topic}</strong></div>)}</div></div></section>
        <section className="page-section lesson-format"><SectionIntro eyebrow="Simple and flexible" title="Lesson Format" /><div className="format-grid"><div><span className="format-label">Location</span><h3>In-person or online</h3><p>In-person lessons in Nassau, Suffolk, and Queens, or online from wherever you are.</p></div><div><span className="format-label">Duration</span><h3>A fit for your schedule</h3><p>Get in touch to discuss a lesson length that suits your goals and schedule.</p></div><div><span className="format-label">Pricing</span><h3>Available on request</h3><p>Contact me for lesson rates and current availability.</p></div></div></section>
        <section className="lesson-cta page-section"><p className="eyebrow">Start where you are</p><h2>Bring the songs you care about.</h2><a className="button button-light" href="/#contact">Ask about lessons <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer />
    </div>
  )
}

export default LessonsPage
