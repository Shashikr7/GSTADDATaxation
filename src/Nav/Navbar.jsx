import React, { useState } from "react";
import logo1 from "../assets/final_logo.png";
import "./Navbar.css";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState({
    services: false,
    startup: false,
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen({
      ...isDropdownOpen,
      [menu]: !isDropdownOpen[menu],
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>

        {/* Desktop and Mobile Menu */}
        <ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <li><a href="#">HOME</a></li>
          <li><a href="#">GST</a></li>
          <li><a href="#">INCOME TAX</a></li>
          
          <li className="dropdown">
            <button
              onClick={() => toggleDropdown('startup')}
              className={`dropdown-toggle ${isDropdownOpen.startup ? "active" : ""}`}
            >
              SERVICES
           </button>
            <ul className={`dropdown-menu ${isDropdownOpen.startup ? "open" : ""}`}>
              <li><a href="#">Company Registration</a></li>
              <li><a href="#">Business Registration</a></li>
              <li><a href="#">Company Name Search</a></li>
             
             
            </ul>
          </li>
          <li><a href="#">FSSAI</a></li>
          <li><a href="#">ACCOUNTING</a></li>
          <li><a href="#">TRADEMARK</a></li>
          <li><a href="#">IEC</a></li>
          <li><a href="#">MSME</a></li>
          <li><a href="#">LICENCE</a></li>

          {/* Dropdown Menu */}
          

          

         
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
