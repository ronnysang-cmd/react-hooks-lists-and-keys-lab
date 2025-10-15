import React from "react";

function ProjectItem({ name, about, technologies, link, image }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <img src={image} alt={name} />
      <div className="technologies">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <a href={link}>Project Link</a>
    </div>
  );
}

export default ProjectItem;
