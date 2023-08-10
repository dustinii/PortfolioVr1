import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-assets/github-icon.png" alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-assets/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/your-user-id" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-assets/stackoverflow-icon.png" alt="Stack Overflow" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
