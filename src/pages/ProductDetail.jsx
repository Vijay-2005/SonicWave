import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../contexts/CartContext';
import products from '../data/products';
import '../styles/ProductDetailPage.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const customizedProduct = {
      ...product,
      selectedColor,
      quantity
    };
    addToCart(customizedProduct);
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'toast-notification';
    notification.innerText = `${product.name} added to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
    }, 100);
  };

  return (
    <section className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to={`/category/${product.category}`}>{product.category}</Link> / 
          <span>{product.name}</span>
        </div>
        
        <div className="product-detail-container">
          <motion.div 
            className="product-detail-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={product.image} alt={product.name} />
          </motion.div>
          
          <motion.div 
            className="product-detail-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{product.name}</h1>
            
            <div className="product-category">{product.category}</div>
            
            <div className="product-rating">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
              <span className="rating-number">({product.rating})</span>
            </div>
            
            <div className="product-price">${product.price.toFixed(2)}</div>
            
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            
            <div className="product-features">
              <h3>Features</h3>
              <ul>
                {product.features.map(feature => (
                  <li key={feature}>
                    {feature === 'wireless' && <span>Wireless Connectivity</span>}
                    {feature === 'noiseCancelling' && <span>Active Noise Cancellation</span>}
                    {feature === 'highRes' && <span>Hi-Res Audio Certified</span>}
                    {feature === 'waterproof' && <span>Waterproof Design</span>}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="product-colors">
              <h3>Available Colors</h3>
              <div className="color-options">
                {product.colors.map(color => (
                  <div 
                    key={color}
                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <i className="fas fa-check"></i>}
                  </div>
                ))}
              </div>
              <p>Selected: {selectedColor}</p>
            </div>
            
            <div className="product-quantity">
              <h3>Quantity</h3>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                >-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
              </div>
            </div>
            
            <div className="product-actions">
              <button className="btn add-to-cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
              <button className="btn buy-now-btn">Buy Now</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
