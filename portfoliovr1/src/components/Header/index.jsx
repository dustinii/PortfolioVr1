import React from 'react';
import Navigation from '../Navigation';
import { Container } from 'react-bootstrap';

function Header({ activeSection, onSectionChange }) {
    return (
        <header className="header-container">
        <Container>
          <h1 className="header-title">Dustin Ildefonso</h1>
          <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />
        </Container>
      </header>
    );
}

export default Header;
