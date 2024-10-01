import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <div id="contact">
    <footer className="footer">
        
        <hr></hr>
        <br></br>
        <br></br>
      <div className="footer-container">
        {/* Email Subscription Section */}
        <div className="footer-section">
          <h3>Subscribe to our emails</h3>
          <br></br>
          <p>For exclusive recipes, discounts, and opportunities</p><br></br>
          <div className="subscription-form">
            <input type="email" placeholder="Email" className="email-input" />
            <button type="submit" className="submit-button">→</button>
          </div>
          
        </div>

        {/* Company Information Section */}
        <div className="footer-section">
          <h3>Who we are</h3>
          <ul className="footer-links">
            <li><a href="#">Search</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Technology Advantage</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
        <h3>Contact Us</h3>
        <ul className="footer-links">
            
            <li><a href="#">MGH RICE MART</a></li>
            <li><a href="#">H No. 12/15/3 Vaglo Building</a></li>
            <li><a href="#">Panaji, Goa 403001</a></li>
            <li><a href="#">info@mghricemart.in</a></li>
            <li><a href="#">+91 9876543210</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
      <p  className="footer-bottom" >© 2024, MGH Rice Mart.</p>
       
      </div>
    </footer>
    </div>
  );
};

export default Footer;
