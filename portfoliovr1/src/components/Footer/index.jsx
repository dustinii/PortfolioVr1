import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={4}>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <img src="/path-to-your-assets/github-icon.png" alt="GitHub" />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <img src="/path-to-your-assets/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://stackoverflow.com/users/your-user-id" target="_blank" rel="noopener noreferrer">
              <img src="/path-to-your-assets/stackoverflow-icon.png" alt="Stack Overflow" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
