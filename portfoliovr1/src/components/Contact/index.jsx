import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Basic validation checks
    if (value.trim() === '') {
      setErrors(prev => ({ ...prev, [name]: true }));
    } else {
      setErrors(prev => ({ ...prev, [name]: false }));
    }

    if (name === 'email' && !value.includes('@')) {
      setErrors(prev => ({ ...prev, [name]: 'Invalid email address' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform further validation here or handle the form submission (e.g., send to a server or API)
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          {errors.name && <span className="error-message">Name is required</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          {errors.email && <span className="error-message">{typeof errors.email === 'string' ? errors.email : 'Email is required'}</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" name="message" value={formData.message} onChange={handleInputChange} required />
          {errors.message && <span className="error-message">Message is required</span>}
        </Form.Group>

        <Button type="submit">Submit</Button>

      </Form>
    </div>
  );
}

export default Contact;
