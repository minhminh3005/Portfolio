import React from "react";
import Home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dream</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals wwith amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <img src={Home1} alt="guy with a camera" />
    </div>
  );
};

export default AboutSection;
