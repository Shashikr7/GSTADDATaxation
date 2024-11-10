import React from "react";
import "./Partners.css";
import etnowLogo from "../../assets/etnow.png";
import nielsenLogo from "../../assets/nielsen.png";
import brightLogo from "../../assets/bright.png";
import golinopinionLogo from "../../assets/golinopinion.png";
import par from "../../assets/p1.png";
import campaignLogo from "../../assets/campaign.png";

const Partners = () => {
  return (
    <div className="partners">
      <h2>Our Partners</h2>
      <div className="partners-grid">
        <div className="partner-item">
          <h4>Media Partner</h4>
          <img src={etnowLogo} alt="ET Now" />
        </div>
        <div className="partner-item">
          <h4>Research Affiliate</h4>
          <img src={nielsenLogo} alt="Nielsen" />
        </div>
        <div className="partner-item">
          <h4>Marketing Partner</h4>
          <img src={par} alt="Nielsen" />
        </div>
        
        <div className="partner-item">
          <h4>Outdoor Media Partner</h4>
          <img src={brightLogo} alt="Bright Outdoor" />
        </div>
        <div className="partner-item">
          <h4>PR Partner</h4>
          <img src={golinopinionLogo} alt="GolinOpinion" />
        </div>
        <div className="partner-item">
          <h4>Digital Partner</h4>
          <img src={campaignLogo} alt="Campaign" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
