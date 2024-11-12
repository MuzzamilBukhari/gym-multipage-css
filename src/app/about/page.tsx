import React from "react";
import { About as AboutComp, SectionTitle } from "@/components";
import "../../styles/about/About.page.css";
const About = () => {
  return (
    <section className="about-section">
      <SectionTitle first="About" second="Us" />
      <p className="about-paragraph">
        At EvolveFit, fitness is a lifestyle. Our expert trainers, personalized
        programs, and state-of-the-art facilities are here to support you every
        step of the way. We’re committed to helping you achieve a stronger,
        healthier version of yourself through dedication and community.
      </p>
      <AboutComp />
    </section>
  );
};

export default About;
