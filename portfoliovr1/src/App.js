import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('AboutMe');

  return (
    <div className="App">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {activeSection === 'AboutMe' && <AboutMe />}
        {activeSection === 'Portfolio' && <Portfolio />}
        {activeSection === 'Contact' && <Contact />}
        {activeSection === 'Resume' && <Resume />}
      </main>

      <Footer />
    </div>
  );
}

export default App;