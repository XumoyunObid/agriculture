import React from "react";
import AboutBanner from "./Components/Banner";
import AboutUs from "./AboutUs";
import WhyChoose from "./WhyChoose/WhyChoose";
import Team from "./Team/Team";
import AboutCategory from "./AboutCategory/AboutCategory";
import Newsletter from "./../Home/Testimonials/Components/Newsletter";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutUs />
      <WhyChoose />
      <Team />
      <AboutCategory />
      <Newsletter />
    </div>
  );
};

export default About;
