import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import './Navbar.css';
import logo from '../../Assets/logo.jpg'; // Import the logo image
import { FaSun, FaMoon } from 'react-icons/fa'; // Add Sun and Moon icons

const Navbar = () => {
  // State to manage theme, default to light theme
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Set the theme in localStorage
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');

    // Toggle scroll lock
    setIsScrollLocked(!isScrollLocked);
  };

  // Load theme from localStorage when component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Apply theme class to the body based on the isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Lock or unlock scroll when the scroll lock state changes
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = ''; // Unlock scroll
    }
  }, [isScrollLocked]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <ScrollLink to="slide" smooth={true} duration={500}>
          <img src={logo} alt="Logo" className="logo-image" />
        </ScrollLink>
      </div>
      <ul className="navbar-links">
        <li>
          <ScrollLink to="slide" smooth={true} duration={500} className="nav-link">Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to="products" smooth={true} duration={500} className="nav-link">Products</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">Contact</ScrollLink>
        </li>
      </ul>
      <div className="navbar-actions">
        {/* Toggle between Sun and Moon icons based on the theme */}
        {isDarkMode ? (
          <FaSun className="theme-icon" onClick={toggleTheme} />
        ) : (
          <FaMoon className="theme-icon" onClick={toggleTheme} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
