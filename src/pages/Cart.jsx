import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaCreditCard } from 'react-icons/fa';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  
  if (cart.length === 0) {
    return (
      <section className="cart-page empty-cart">
        <div className="container">
          <h1>Your Cart</h1>
          <div className="empty-cart-message">
            <img src="/images/empty-cart.svg" alt="Empty cart" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn-primary">
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>
        
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-header">
              <span className="header-product">Product</span>
              <span className="header-price">Price</span>
              <span className="header-quantity">Quantity</span>
              <span className="header-total">Total</span>
              <span className="header-actions"></span>
            </div>
            
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                  </div>
                </div>
                
                <div className="item-price">${item.price}</div>
                
                <div className="item-quantity">
                  <button 
                    className="qty-btn decrease"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button 
                    className="qty-btn increase"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
                
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                <div className="item-actions">
                  <button 
                    className="btn-remove" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Items ({cart.reduce((count, item) => count + item.quantity, 0)})</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            
            {cartTotal < 100 && (
              <div className="free-shipping-note">
                Add ${(100 - cartTotal).toFixed(2)} more to get free shipping!
              </div>
            )}
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <Link to="/checkout" className="btn-checkout">
              <FaCreditCard /> Proceed to Checkout
            </Link>
            
            <Link to="/products" className="btn-continue-shopping">
              <FaArrowLeft /> Continue Shopping
            </Link>
            
            <button className="btn-clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
