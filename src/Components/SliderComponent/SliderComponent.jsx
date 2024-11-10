import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide4 from "../../assets/serrvice3.png"; // Add your slider images
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enables automatic slide transition
    autoplaySpeed: 2000,   // 3 seconds for each slide
    arrows: true,          // Shows navigation arrows
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
        <img src={slide2} alt="slide2" />
          <div className="slide-content">
          <h2>Some heading 1</h2>
          <p> some Para1</p>
          </div>
        </div>
        <div className="slide">
        <img src={slide3} alt="slide3" />
          <div className="slide-content">
            <h2>Some heading 2</h2>
            <p> some Para 2</p>
          </div>
        </div>
        <div className="slide">
        <img src={slide4} alt="slide4" />
          <div className="slide-content">
            <h2>Some heading 3</h2>
            <p>Some Para 3</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Custom arrow components for styling the arrows
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
    />
  );
};

export default SliderComponent;
