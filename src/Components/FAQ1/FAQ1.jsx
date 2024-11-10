import React, { useState } from "react";
import "./FAQ1.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const allFaqs = [
  { question: "What is GSTADDA?", answer: "GSTADDA is an online platform that provides tax filing services in India..." },
  { question: "What is e-Filing of Income Tax Returns?", answer: "e-Filing of Income Tax Returns is the process of submitting tax returns electronically..." },
  { question: "Who Should File an Income Tax Return (ITR) in India?", answer: "All individuals and businesses with a certain income threshold in India are required..." },
  { question: "Why Choose GSTADDA?", answer: "GSTADDA offers a user-friendly platform with a customer-first approach for filing taxes." },
  { question: "What documents are needed for e-Filing?", answer: "Documents like PAN card, Form 16, and bank details are generally required for e-Filing." },
];

const FAQ1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount(visibleCount + 2);
  };

  return (
    <div className="container2">
      {/* FAQ Section */}
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {allFaqs.slice(0, visibleCount).map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
        {visibleCount < allFaqs.length && (
          <button className="view-more" onClick={loadMore}>
            View more
          </button>
        )}
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <select required>
            <option value="" disabled selected>
              Select Query Type
            </option>
            <option value="general">General Inquiry</option>
            <option value="technical">Technical Support</option>
            <option value="billing">Billing</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="send-message">Send Message</button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h3>Our Address</h3>
            <p>HEAD.OFFICE-U-132, VIJAY NAGAR, NARELA, DELHI 110040<br/>
            </p>
            
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Send your message</h3>
            <p> gstaddahelpline@gmail.com, contact@gstadda.com
            </p>
          </div>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <div>
            <h3>Call us on</h3>
            <p>(+91) 9540958482</p>
          </div>
        </div>
        <div className="contact-item">
          <FaClock className="contact-icon" />
          <div>
            <h3>Work Time</h3>
            <p>Mon - Fri: 08.00 - 16.00<br />Sat: 10.00 - 14.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
