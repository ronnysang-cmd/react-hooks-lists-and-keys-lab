import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
