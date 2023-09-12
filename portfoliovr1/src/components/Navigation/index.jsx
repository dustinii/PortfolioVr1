import React from 'react';
import './style.css';
import { ButtonGroup, Button } from 'react-bootstrap';

function Navigation({ activeSection, onSectionChange }) {
  return (
    <nav className="portfolio-navigation">
      <ButtonGroup>
        {["AboutMe", "Portfolio", "Contact", "Resume"].map(section => (
          <Button
            key={section}
            onClick={() => onSectionChange(section)}
            variant={activeSection === section ? 'primary' : 'light'}
          >
            {section}
          </Button>
        ))}
      </ButtonGroup>
    </nav>
  );
}

export default Navigation;