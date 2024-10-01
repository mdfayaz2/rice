import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; // Example for your navbar
import Products from './components/product/Product'; 
import Contact from './components/Footer/Footer';
import CarouselComponent from './components/hero/CarouselComponent';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><CarouselComponent /><Products /><Contact /></>} />
        <Route path="/slide" element={<CarouselComponent />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
