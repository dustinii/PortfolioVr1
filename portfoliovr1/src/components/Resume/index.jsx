import React from 'react';

const Resume = () => {
  return (
    <div className="resume-section">
      <h2>Resume</h2>

      {/* Link to downloadable resume */}
      <div className="resume-download">
        <a href="/assets/resume.pdf" download="DeveloperName-Resume.pdf">
          Download My Resume
        </a>
      </div>

      {/* Developer's proficiencies */}
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js & Express.js</li>
          <li>RESTful APIs</li>
          <li>Database Management (SQL & NoSQL)</li>
          <li>Responsive Web Design</li>
          <li>Version Control/Git</li>
          <li>Test-Driven Development</li>
          <li>... and more</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
