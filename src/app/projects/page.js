import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "../../styles/card.css";
import projectList from "../../data/projects.json";

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="showcase">
        <h1 id="showcase-text">
          <span id="showcase-green">Project</span> Showcase
        </h1>
      </div>
      <section className="project-section">
        <div className="project-container">
          {projectList.map((project, i) => (
            <ProjectCard
              key={i}
              name={project.name}
              link={project.link}
              short_description={project.short_description}
              description={project.description}
              video={project.video}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
