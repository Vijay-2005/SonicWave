import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would process payment, save order to database, etc.
    console.log('Order submitted:', { customer: formData, items: cart, total: cartTotal });
    
    // Show order confirmation
    setOrderPlaced(true);
    clearCart();
  };
  
  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-page empty-checkout">
        <div className="container">
          <h1>Checkout</h1>
          <div className="empty-checkout-message">
            <i className="fas fa-shopping-cart"></i>
            <h2>Your cart is empty</h2>
            <p>Add some products to your cart before proceeding to checkout.</p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  if (orderPlaced) {
    return (
      <div className="checkout-page order-confirmation">
        <div className="container">
          <div className="order-success">
            <i className="fas fa-check-circle"></i>
            <h1>Thank You For Your Order!</h1>
            <p>Order #SWO-{Math.floor(100000 + Math.random() * 900000)}</p>
            <p>We've sent a confirmation email to {formData.email}</p>
            <div className="next-steps">
              <Link to="/" className="btn-primary">
                Back to Home
              </Link>
              <Link to="/products" className="btn-secondary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        
        <div className="checkout-container">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h2>Shipping Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input 
                      type="text" 
                      id="state" 
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2>Payment Information</h2>
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input 
                    type="text" 
                    id="cardName" 
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required 
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expMonth">Exp Month</label>
                    <input 
                      type="text" 
                      id="expMonth" 
                      name="expMonth"
                      value={formData.expMonth}
                      onChange={handleChange}
                      placeholder="MM"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="expYear">Exp Year</label>
                    <input 
                      type="text" 
                      id="expYear" 
                      name="expYear"
                      value={formData.expYear}
                      onChange={handleChange}
                      placeholder="YYYY"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input 
                      type="text" 
                      id="cvv" 
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <button type="submit" className="btn-place-order">
                Place Order
              </button>
            </form>
          </div>
          
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Qty: {item.quantity}</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="total-row grand-total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
