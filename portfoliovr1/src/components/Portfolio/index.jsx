import React from 'react';
import Project from '../Project';

import { Card, Button } from 'react-bootstrap';

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
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Button variant="primary" href={project.deployedLink} target="_blank">Deployed App</Button>
                      <Button variant="secondary" href={project.repoLink} target="_blank">GitHub Repo</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
