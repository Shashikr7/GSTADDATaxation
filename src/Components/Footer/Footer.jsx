import React from "react";
import "./Footer.css";
import {
  FaGooglePlay,
  FaAppStoreIos,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          {/* Updated "Our Services" Section */}
          <div className="link-section">
            <h4>Our Services</h4>
            <div className="services-grid">
              <ul>
                <li><a href="#">Income Tax</a></li>
                <li><a href="#">GST</a></li>
                <li><a href="#">TDS</a></li>
                <li><a href="#">Tax Planning</a></li>
                <li><a href="#">Accounting</a></li>
                <li><a href="#">Reply to notice</a></li>
                <li><a href="#">Company Policies</a></li>
                
                
              </ul>
              
            </div>
            
          </div>
          

          <div className="link-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </div>

          <div className="link-section">
            <h4>Other Links</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">T&C</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Refer and Earn</a></li>
            </ul>
          </div>

          {/* Google Map and Social Media Section */}
          <div className="link-section">
            <h4>Visit Us</h4>
            <p>
              CORP. OFFICE - I-THUM TOWER-C, OFFICE NO 214, INDUSTRIAL AREA, SECTOR 62, NOIDA, UTTAR PRADESH, 201309
              <br />
              Phone: 9540958482<br />
              Email: gstaddahelpline@gmail.com<br />
              <br />
            </p>
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873.625756631173!2d77.0867281695525!3d28.853652473085397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da96e5aab2b07%3A0x63b26c7bbb1bbe88!2s132%2C%20Vijay%20Nagar%2C%20Narela%2C%20Delhi%2C%20110040%2C%20India!5e0!3m2!1sen!2sus!4v1730218081909!5m2!1sen!2sus"
              width="80%"
              height="120"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            {/* Social Media Icons below Map */}
            <div className="social-media">
              <a href="#"><FaWhatsapp size={20} className="icon-whatsapp" /></a>
              <a href="#"><FaLinkedin size={20} className="icon-linkedin" /></a>
              <a href="#"><FaInstagram size={20} className="icon-instagram" /></a>
              <a href="#"><FaTwitter size={20} className="icon-twitter" /></a>
              <a href="#"><FaFacebook size={20} className="icon-facebook" /></a>
              <a href="#"><FaYoutube size={20} className="icon-youtube" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-rights">
          &copy; {new Date().getFullYear()} Gstadda. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
