import React from "react";
import "./FeatureCards.css"; // Custom styles for the component

const features = [
  {
    title: "Convenient Recharges",
    description:
      "Recharge your mobile or DTH account anytime, anywhere, and from any device with our user-friendly app and web portal.",
  },
  {
    title: "Wide Range of Service Providers",
    description:
      "We support all major mobile and DTH service providers, ensuring you can recharge any connection through our platform.",
  },
  {
    title: "Instant Recharges",
    description:
      "No more waiting. Your recharges are processed instantly, so you never have to worry about interrupted services.",
  },
  {
    title: "Customer Support",
    description:
      "Our dedicated support team is always ready to assist you with any questions or issues.",
  },
];

const FeatureCards = () => {
  return (
    <div className="feature-cards-container">
      <h2>Here's why you should choose us:</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
