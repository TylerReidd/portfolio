import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionIntro from '../components/SectionIntro'
import ProjectCard from '../components/ProjectCard'
import { projects, services, siteConfig } from '../data/content'

function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero page-section">
          <div className="hero-copy">
            <p className="eyebrow">Tyler Reid <span>/</span> Independent technical partner</p>
            <h1>Websites, software, and technical help <em>without the agency overhead.</em></h1>
            <p className="hero-lede">I build and improve websites, solve software problems, and help small businesses and individuals with technology.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Get a quote <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#work">See my work <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">Web Developer <span>•</span> Technical Freelancer <span>•</span> Music Instructor</p>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <span className="hero-mark-line"></span>
            <span className="hero-mark-letter">T</span>
            <span className="hero-mark-caption">Web &amp; music<br />by Tyler Reid</span>
          </div>
        </section>

        <section className="page-section services-section" id="services">
          <SectionIntro eyebrow="What I do" title="How I Can Help">
            <p>Practical help for the thing in front of you, whether that means a new website, a stubborn bug, or a better way to handle repetitive work.</p>
          </SectionIntro>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="callout"><span>Have a technical problem that doesn't fit neatly into one of these categories?</span> Send it to me. I'll tell you if I can help.</div>
        </section>

        <section className="page-section work-section" id="work">
          <SectionIntro eyebrow="A small selection" title="Selected Work">
            <p>One project, carefully documented. More work will be added as it is ready to show.</p>
          </SectionIntro>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} key={project.title || index} />)}</div>
        </section>

        <section className="benefits-band">
          <div className="page-section benefits-section">
            <SectionIntro eyebrow="The working relationship" title="Why Work With Me" />
            <div className="benefits-list">
              <p><strong>Direct communication</strong> — You work with the person doing the work.</p>
              <p><strong>Small projects welcome</strong> — A focused fix or a first step is a valid project.</p>
              <p><strong>Clear scope first</strong> — We agree on what matters before anything gets built.</p>
              <p><strong>Improve what exists</strong> — Rebuilding is not the default answer.</p>
            </div>
          </div>
        </section>

        <section className="page-section about-section" id="about">
          <SectionIntro eyebrow="A little context" title="About Me" />
          <div className="about-copy">
            <p>I'm Tyler Reid, a software developer with a background that spans computer science, music, teaching, and creative work.</p>
            <p>I have experience building full-stack web applications, along with a long history as a private music instructor. I bring that mix of technical problem-solving and patient communication to every project.</p>
          </div>
        </section>

        <section className="lessons-preview page-section">
          <div><p className="eyebrow">Another way I can help</p><h2>Private Guitar Lessons</h2></div>
          <div className="lessons-preview-content"><p>Personalized instruction for the music you actually want to play.</p><ul><li>Beginner through advanced</li><li>Rock, pop, blues, and classical</li><li>Theory, songwriting, and technique</li><li>In-person and online availability</li></ul><a className="text-link" href="/lessons">View guitar lessons <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="page-section contact-section" id="contact">
          <SectionIntro eyebrow="Start a conversation" title="Tell Me What You Need"><p>A short note is enough. I'll reply with next steps and a clear sense of whether I'm the right fit.</p></SectionIntro>
          <div className="contact-layout">
            <form className="contact-form" action="" method="post">
              <div className="form-row"><label>Name<input type="text" name="name" autoComplete="name" required /></label><label>Email<input type="email" name="email" autoComplete="email" required /></label></div>
              <label>Type of project<select name="projectType" defaultValue=""><option value="" disabled>Select one</option><option>Website / technical help</option><option>Guitar lessons</option><option>Other</option></select></label>
              <label>Tell me a little about what you're looking for.<textarea name="message" rows="6" required></textarea></label>
              <button className="button button-dark" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
              <p className="form-note">Form endpoint can be added to this form action when you choose a service such as Formspree or Netlify Forms.</p>
            </form>
            <aside className="contact-aside"><p>Prefer email?</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>{siteConfig.location}</span></aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
