import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Who are we?</h3>
          <br></br>
          <p>
            Mission Hospital is your trusted partner in healthcare, dedicated to
            providing exceptional care for the entire community. We believe in
            the power of personalized medicine, and our team of highly skilled
            and compassionate doctors, nurses, and staff work together to
            deliver comprehensive medical services tailored to your unique
            needs. From preventative care and wellness programs to advanced
            diagnostics and treatments, we're here to guide you on your journey
            towards optimal health.
          </p>
          <p>
            At Mission Hospital, we go beyond simply treating illness. We
            prioritize your well-being, fostering a warm and supportive
            environment where you feel heard and understood. We believe in open
            communication and collaboration, ensuring you're actively involved
            in every step of your care plan. Our mission is to empower you to
            make informed decisions about your health and achieve a life of
            vitality and wellness.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
