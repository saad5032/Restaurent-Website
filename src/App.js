import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import Cart from './components/cart/cart';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
                <Header />
                <SpecialMenu />
                <AboutUs />
        </>

        } />
      <Route path="/cart" element={<Cart />} /> {/* Add route for the cart page */}
      {/* <Route path="/special-menu" element={<SpecialMenu />} /> */}
      {/* Define other routes as needed */}
    </Routes>


    {/* <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
  </Router>


);

export default App;
