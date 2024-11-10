import React, { useState, useEffect } from "react";
import "./SplashScreen.css"; // Custom styles for the component
import logo from "../../assets/final_logo.png"; // Replace with your logo path

const SplashScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to stop showing the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0); // Adjust the delay time if needed to align with CSS fade-out timing

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? (
        <div className="splash-screen">
          <img src={logo} alt="Logo" className="splash-logo" />
        </div>
      ) : (
        <div className="main-content">{children}</div>
      )}
    </>
  );
};

export default SplashScreen;
