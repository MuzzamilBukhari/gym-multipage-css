import React from "react";
import Image from "next/image";
import "../../styles/about/About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <Image
          className="about-image"
          alt="hero"
          src="/images/about.jpg"
          width={520}
          height={460}
        />
      </div>
      <div className="text-container">
        <h1 className="about-title">
          Why
          <span className="highlight"> Choose Us?</span>
        </h1>
        <p className="about-description">
          Our diverse membership base creates a friendly and supportive
          atmosphere, where you can make friends and stay motivated.
          <br />
          <br />
          Unlock your potential with our expert Personal Trainers.
          <br />
          <br />
          Elevate your fitness with practice sessions.
          <br />
          <br />
          We provide Supportive management, for your fitness success.
        </p>

        <button className="cta-button">Get Started with a Free Lesson!</button>
      </div>
    </div>
  );
};

export default About;
