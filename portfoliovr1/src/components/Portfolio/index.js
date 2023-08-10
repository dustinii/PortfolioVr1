import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            title: 'Project 1',
            image: '/assets/images/project1.jpg',
            deployedLink: 'google.com',
            repoLink: 'https://github.com/'
        },
        {
            title: 'Project 2',
            image: '/assets/images/project2.jpg',
            deployedLink: 'google.com',
            repoLink: 'https://github.com/'
        },
    ];

    return (
        <div className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <Project 
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        repoLink={project.repoLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
