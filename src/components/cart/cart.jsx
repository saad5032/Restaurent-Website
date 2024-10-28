import React from 'react';
import { useLocation } from 'react-router-dom';
import './cart.css' 
const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] }; // Get cart items from state

  return (
    <div className="cart-page">
      <div className="cart-details">
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>

      <div className="user-form">
        <h2>Your Details</h2>
        <form>
          {/* User details form */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
