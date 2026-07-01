import hatSrc from "../assets/hat-stripped.jpg";
import sockSrc from "../assets/sock.jpg";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    key: "project1",
    title: "Project 1 title",
    imageSrc: hatSrc,
    shortDescription: "A simple explanation of the project",
    ctaLabel: "Exploration link",
  },
  {
    key: "project2",
    title: "Project 2 title",
    imageSrc: sockSrc,
    shortDescription: "A simple explanation of the project",
    ctaLabel: "Exploration link",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => {
          return <ProjectCard key={project.key} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
