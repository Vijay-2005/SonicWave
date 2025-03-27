import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../../contexts/CartContext';
import '../../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <h1><span className="sonic">Sonic</span><span className="wave">Wave</span></h1>
            </Link>
          </motion.div>
          
          <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <motion.nav 
            className={mobileMenuOpen ? 'active' : ''}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.nav>
          
          <motion.div 
            className="header-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="search-bar">
              <input type="text" placeholder="Search products..." />
              <button><i className="fas fa-search"></i></button>
            </div>
            <div className="cart">
              <Link to="/cart"><i className="fas fa-shopping-cart"></i> <span className="cart-count">{itemCount}</span></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
