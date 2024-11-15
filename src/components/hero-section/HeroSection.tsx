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
            Build Your
            <br className="hidden-lg" />
            <span className="hero-highlight"> Dream Physique </span>
          </h1>
          <p className="hero-description">
            Unlock your potential with our expert Personal Trainers.
            <br />
            Elevate your fitness with practice sessions.
            <br />
            Join us today!
          </p>
          <a
            className="hero-button-link"
            href=""
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
