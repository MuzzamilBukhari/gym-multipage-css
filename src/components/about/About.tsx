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
          Personalized Training: Tailored fitness plans to meet your unique
          goals and needs.
          <br />
          <br />
          Expert Trainers: Our certified trainers provide guidance and
          motivation every step of the way.
          <br />
          <br />
          Motivating Community: Join a supportive and encouraging environment
          that pushes you to succeed.
          <br />
          <br />
          Flexible Timings: Convenient hours to fit your busy lifestyle and
          fitness goals.
        </p>

        <button className="cta-button">Get Started with a Free Lesson!</button>
      </div>
    </div>
  );
};

export default About;
