function ProjectCard(project) {
  return (
    <div id="project1" className="project">
      <div className="project-image-container">
        <img className="project-image" src={project.project.imageSrc} alt="" />
      </div>
      <div className="project-details-short">
        <h3>{project.project.title}</h3>
        <p>{project.project.shortDescription}</p>
        <a className="project-cta" href="http://">
          {project.project.ctaLabel}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
