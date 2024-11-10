import React from "react";
import Footer from "./Components/Footer/Footer";
import Subheader from "./Components/Subheader/Subheader";
import Navbar from "./Nav/Navbar";

import Services from "./Components/Services/Services";
import TestimonialSlider from "./Components/Testimonials/TestimonialSlider";
import FAQ from "./Components/FAQ/FAQ";
import Partners from "./Components/Partners/Partners";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import FeatureCards from "./Components/FeatureCards/FeatureCards";
import Notification from "./Components/Notification/Notification";
import SliderComponent from "./Components/SliderComponent/SliderComponent";
import FAQ1 from "./Components/FAQ1/FAQ1";






const App = () => {
  return (
    <div className="container">
      <SplashScreen/>
      <Subheader/>
      <Navbar/>
      <SliderComponent/>
      <Notification/>
      <Services/>
      <Partners/>
      <TestimonialSlider/>
      <FeatureCards/>
      <FAQ1/>
      <Footer/>
    </div>
  );
};

export default App;
