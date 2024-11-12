import React from "react";
import { Button } from "@/components";
import "../../styles/hero-section/HeroSection.css";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your
            <br className="hidden-lg" />
            <span className="hero-highlight"> Fitness </span>
          </h1>
          <p className="hero-description">
            Achieve strength and endurance with EvolveFit. Our expert-led
            programs
            <br />
            and supportive community will help you reach your fitness goals.
            <br />
            Join us today!
          </p>
          <a
            className="hero-button-link"
            href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button" className="hero-button">
              Join us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
