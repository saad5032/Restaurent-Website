import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menuitem.css';
import images from '../../constants/images';

const MenuItem1 = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Add the selected item to the cart
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleCheckout = () => {
    // Navigate to the cart page and pass the selected items
    navigate('/cart', { state: { cartItems } });
  };

  const products = [
    {
      id: 1,
      image: images.wings,
      title: 'Chicken Whole Wings',
      description: 'Fresh and juicy chicken whole wings.',
    },
    {
      id: 2,
      image: images.half,
      title: 'Chic Half Wings',
      description: 'Crispy and delicious chicken half wings.',
    },
    {
      id: 3,
      image: images.tenders,
      title: 'Chicken Tenders',
      description: 'Tender and flavorful chicken tenders.',
    },
    // Add more products as needed
  ];

  return (
    <div className="app__menuitem">
      <div className="product-cards-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img id="img" src={product.image} alt="Product" className="product-image" />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <button className="buy-now-button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      <div className="checkout-section">
        <button className="checkout-button" onClick={handleCheckout}>
          Go to Cart ({cartItems.length} items)
        </button>
      </div>
    </div>
  );
};

export default MenuItem1;
