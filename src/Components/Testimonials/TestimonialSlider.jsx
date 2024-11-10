import React from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css"; // Custom styles for the component
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const testimonials = [
  {
    name: "Y Krishna",
    rating: 4,
    feedback:
      "I availed their services for tax planning and for tax returns. I am satisfied with their professional services. Appreciate CA Aastha Sharma for her due diligence and inputs on Tax Planning.",
  },
  {
    name: "Chetu",
    rating: 5,
    feedback:
      "Excellent support from Soumen who filed my returns for AY- 2022-2023, had a lot of iterations he could still file hassle free.",
  },
  {
    name: "Venkatesh Tg",
    rating: 5,
    feedback:
      "Like most salaried folks who pledge their lives to their employer & forget their personal commitments, I too had gloriously forgotten about filing my income tax return.",
  },
  {
    name: "Amit Kumar",
    rating: 4,
    feedback:
      "They provide excellent tax consulting services with a customer-first approach. Highly recommended.",
  },
  {
    name: "Neha Sharma",
    rating: 5,
    feedback:
      "Fast and hassle-free service. Their team is very responsive and knowledgeable.",
  },
  {
    name: "Ravi Patel",
    rating: 5,
    feedback:
      "I was very impressed with the thoroughness of the service. Highly recommend!",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <div className="custom-arrow left-arrow">
        <FaChevronLeft size={20} color="#000" />
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow right-arrow">
        <FaChevronRight size={20} color="#000" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider">
      <h2>Customer Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
                alt={testimonial.name}
              />
            </div>
            <h3>{testimonial.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < testimonial.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
