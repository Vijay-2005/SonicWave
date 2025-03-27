import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.isNew && <span className="badge new">New</span>}
              {product.discount > 0 && <span className="badge discount">-{product.discount}%</span>}
            </div>
            
            <div className="product-info">
              <h3 className="product-name">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h3>
              
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
                <div className="product-rating">
                  <FaStar className="star-icon" />
                  <span>{product.rating}</span>
                </div>
              </div>
              
              <div className="product-price">
                {product.oldPrice && (
                  <span className="old-price">${product.oldPrice}</span>
                )}
                <span className="current-price">${product.price}</span>
              </div>
              
              <div className="product-actions">
                <button 
                  className="btn-add-to-cart"
                  onClick={() => onAddToCart(product)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <Link to={`/product/${product.id}`} className="btn-view-details">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-products">No products match your filters. Try changing your selections.</div>
      )}
    </div>
  );
};

export default ProductGrid;
