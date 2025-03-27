import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About SoundWave</h1>
          <p className="subtitle">Redefining Audio Experience Since 2010</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/images/about-us.jpg" alt="Our team at SoundWave" />
          </div>
          
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              SoundWave began with a simple idea: everyone deserves to experience music in its purest form. Founded by a group of audio engineers and music enthusiasts, we set out to create audio products that deliver exceptional sound quality without the premium price tag.
            </p>
            
            <p>
              Over the years, we've grown from a small startup to a recognized name in audio equipment, but our mission remains the same. We continue to innovate and push the boundaries of what's possible in sound technology, always with our customers' experience as our top priority.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              Our mission is to make high-quality audio accessible to everyone. We believe that great sound has the power to transform experiences, evoke emotions, and bring people together. Every product we create is designed with this belief in mind.
            </p>
            
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality</h3>
                <p>We never compromise on the quality of our products. Each item undergoes rigorous testing to ensure it meets our high standards.</p>
              </div>
              
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We continuously explore new technologies and approaches to improve the audio experience.</p>
              </div>
              
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>We're committed to minimizing our environmental impact through responsible materials and manufacturing processes.</p>
              </div>
              
              <div className="value-card">
                <h3>Customer Focus</h3>
                <p>Our customers are at the heart of everything we do. We listen to feedback and strive to exceed expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
