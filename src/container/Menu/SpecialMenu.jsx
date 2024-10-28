import React from 'react';

import MenuItem1 from '../../components/Menuitem/Menuitem';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 id="h1" className="headtext__cormorant">Item&apos;s on Wholesale</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center" id='sec'>
        <p className="app__specialMenu-menu_heading">Chicken</p>
        <div className="app__specialMenu_menu_items">
            <MenuItem1/>

        </div>
      </div>


      {/* <div className="app__specialMenu-menu_cocktails  flex__center" id='sec'>
        <p className="app__specialMenu-menu_heading">Fish</p>
        <div className="app__specialMenu_menu_items">
   
 
        </div>
      </div> */}
    </div>

  </div>
);

export default SpecialMenu;