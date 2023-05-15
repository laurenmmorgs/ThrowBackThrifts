import React from 'react';

function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* Content in the middle */}
      </div>
      <footer
        style={{
          flexShrink: 0,
          backgroundColor: '#343a40',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        About Us
        <p>FAQ</p>
        <p>Refund Policy</p>
        <a href="#" className="btn btn-primary">
          Contact Us
        </a>
      </footer>
    </div>
  );
}

export default About;