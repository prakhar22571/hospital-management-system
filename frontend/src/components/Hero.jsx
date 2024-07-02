import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Mission Hospital is committed to providing exceptional healthcare 
          with a focus on patient well-being. Our team of dedicated professionals
          utilizes their expertise to deliver comprehensive and compassionate care.
          We tailor our services to meet each patient's unique needs, 
          fostering a healing environment that prioritizes your journey towards optimal health.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
