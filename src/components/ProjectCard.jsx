import ProjectGallery from './ProjectGallery'

function ProjectCard({ project }) {
  if (!project.title) return null

  const imageList = Array.isArray(project.images) ? project.images : project.images ? [project.images] : []
  const images = imageList.map((image) => typeof image === 'string'
    ? { src: image, alt: `${project.title} project screenshot` }
    : image)

  return (
    <article className="project-card">
      <ProjectGallery title={project.title} images={images} />
      <div className="project-card-body">
        <p className="project-kicker">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {(project.demoUrl || project.githubUrl) && (
          <div className="project-links">
            {project.demoUrl && <a href={project.demoUrl}>Live demo ↗</a>}
            {project.githubUrl && <a href={project.githubUrl}>GitHub ↗</a>}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
