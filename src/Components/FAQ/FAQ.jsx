import React, { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const allFaqs = [
  {
    question: "What is GSTADDA?",
    answer: "GSTADDA is an online platform that provides tax filing services in India...",
  },
  {
    question: "What is e-Filing of Income Tax Returns?",
    answer: "e-Filing of Income Tax Returns is the process of submitting tax returns electronically...",
  },
  {
    question: "Who Should File an Income Tax Return (ITR) in India?",
    answer: "All individuals and businesses with a certain income threshold in India are required...",
  },
  {
    question: "Why Choose GSTADDA?",
    answer: "GSTADDA offers a user-friendly platform with a customer-first approach for filing taxes.",
  },
  {
    question: "What documents are needed for e-Filing?",
    answer: "Documents like PAN card, Form 16, and bank details are generally required for e-Filing.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 FAQs

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount(visibleCount + 2); // Load 2 more FAQs each time
  };

  return (
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
  );
};

export default FAQ;
