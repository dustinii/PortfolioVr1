import React, { useState } from 'react';

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

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          {errors.name && <span className="error-message">Name is required</span>}
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          {errors.email && <span className="error-message">{typeof errors.email === 'string' ? errors.email : 'Email is required'}</span>}
        </div>

        <div className="input-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange} required></textarea>
          {errors.message && <span className="error-message">Message is required</span>}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Contact;
