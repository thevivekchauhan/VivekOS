import React from 'react';

const handleProjectClick = (link) => {
    if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
};

const Project = ({ project }) => {
    return (
        <div className="project-card" onClick={() => handleProjectClick(project.link)}>
            <h3>{project.projectName}</h3>
            <p>{project.description}</p>
            <p>Made with: {project.madeWith.join(', ')}</p>
        </div>
    );
};

export default Project;