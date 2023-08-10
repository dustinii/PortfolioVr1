import React from 'react';
import PropTypes from 'prop-types';

function Project({ title, imageUrl, deployedUrl, githubUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
        </p>
        <p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired
};

export default Project;
