function ProjectCard({ project }) {
  if (!project.title) return null

  const imageList = Array.isArray(project.images) ? project.images : project.images ? [project.images] : []
  const imageSrc = imageList[0] || ''

  return (
    <article className="project-card">
      {imageSrc ? (
        <div className="project-image">
          <img src={imageSrc} alt={`${project.title} project screenshot`} />
        </div>
      ) : (
        <div
          className="project-image"
          aria-label={`${project.title} project screenshot placeholder`}
        >
          <span>Project screenshot</span>
        </div>
      )}
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
