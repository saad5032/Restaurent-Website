import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">

      <h1 className="app__header-h1">Quality and Savings on Fresh Wings, Tenders, Catfish Fillets & other items</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', color:'black' }}>Stock your kitchen with premium wholesale wings, tenders, and catfish fillets—sourced fresh and packed in bulk for unbeatable quality and savings. Perfect for restaurants, catering services, or home chefs looking to elevate their menus with high-quality raw food boxes at wholesale prices!</p>
    </div>

    <div className='sec2'>
      <img src={images.img} alt="header_img" id='header_img' />
    </div>
  </div>
);

export default Header;