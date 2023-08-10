import React from 'react';
import './style.css';

function Navigation({ activeSection, onSectionChange }) {
  return (
    <nav className="portfolio-navigation">
      {["About Me", "Portfolio", "Contact", "Resume"].map(section => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className={activeSection === section ? 'active' : ''}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;