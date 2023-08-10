import React from 'react';
import Navigation from '../Navigation';

function Header({ activeSection, onSectionChange }) {
    return (
        <header className="header-container">
            <h1 className="header-title">Dustin Ildefonso</h1>
            <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />        </header>
    );
}

export default Header;
