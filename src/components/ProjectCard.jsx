import React from 'react';
import '../../src/styles/ProjectCard.css';

export function ProjectCard(props) {
  const { project } = props;

  return (
    <a className='project-link' href={project.link} target='blank'>
      <div className='project-card'>
        <img
          className={project.size}
          src={project.capture}
          alt={project.name}
        />
        <h3 className='project-title'>{project.name}</h3>
        <p className='project-description'>{project.description}</p>
        <p className='project-orga'>{project.orga}</p>
        <p className='project-technos'>{project.technos}</p>
      </div>
    </a>
  );
}
