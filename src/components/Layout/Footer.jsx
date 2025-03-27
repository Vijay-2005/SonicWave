import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2><span className="sonic">Sonic</span><span className="wave">Wave</span></h2>
            <p>Premium audio equipment for the true audiophile.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Shop</h3>
              <ul>
                <li><Link to="/category/headphones">Headphones</Link></li>
                <li><Link to="/category/speakers">Speakers</Link></li>
                <li><Link to="/category/earbuds">Earbuds</Link></li>
                <li><Link to="/category/accessories">Accessories</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/shipping">Shipping Info</Link></li>
                <li><Link to="/returns">Returns</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/press">Press</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} SonicWave. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
