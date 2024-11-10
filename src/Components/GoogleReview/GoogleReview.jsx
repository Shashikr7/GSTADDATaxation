import React from "react";
import "./GoogleReview.css";

const GoogleReview = () => {
  return (
    <div className="google-review">
      <div className="review-details">
        <h2 className="review-title">
          <span className="google-logo">Google</span> Reviews
        </h2>
        <p className="review-count">158,404 reviews</p>
      </div>
      <button className="review-button">Review us on Google</button>
    </div>
  );
};

export default GoogleReview;
