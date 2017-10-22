import React from 'react';
const Footer = () => (
  <section className="hero is-large is-light is-bold">
    <div className="hero-body">
      <div className="container" align="center">
        <h2 className="subtitle">
          All Rights Reserved. &copy; {(new Date).getFullYear()}
        </h2>
      </div>
    </div>
  </section>
);

export default Footer;