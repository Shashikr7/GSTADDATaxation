import React, { useState } from "react";
import Slider from "react-slick"; // Import the Slider
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import slide1 from "../../assets/slide1.png"; // Add your slider images
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import "./HeroSection.css";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // State to manage form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="moving-text">Grow Your Income and Business With Us.</h1>
        <p>Discover opportunities and maximize your potential with GSTADDA.</p>
        
        {/* Form for User Details */}
        <form className="user-details-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Your Phone Number" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            rows="2" 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="hero-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src={slide1} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={slide2} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={slide3} alt="Slide 3" className="slider-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
