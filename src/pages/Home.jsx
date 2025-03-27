import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog/ProductCatalog';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      
      <section className="featured-categories">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Shop by Category
          </motion.h2>
          
          <div className="category-grid">
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/category/headphones">
                <div className="category-image">
                  <img 
                    src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Headphones" 
                  />
                </div>
                <h3>Headphones</h3>
              </Link>
            </motion.div>
            
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/category/speakers">
                <div className="category-image">
                  <img 
                    src="https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Speakers" 
                  />
                </div>
                <h3>Speakers</h3>
              </Link>
            </motion.div>
            
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/category/earbuds">
                <div className="category-image">
                  <img 
                    src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Earbuds" 
                  />
                </div>
                <h3>Earbuds</h3>
              </Link>
            </motion.div>
            
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/category/accessories">
                <div className="category-image">
                  <img 
                    src="https://images.unsplash.com/photo-1588941288453-c5e94628a0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Accessories" 
                  />
                </div>
                <h3>Accessories</h3>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ProductCatalog />
    </>
  );
};

export default Home;
