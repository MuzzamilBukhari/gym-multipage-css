import React from "react";
import { About as AboutComp, SectionTitle } from "@/components";
import "../../styles/about/About.page.css";
const About = () => {
  return (
    <section className="about-section">
      <SectionTitle first="About" second="Us" />

      <AboutComp />
    </section>
  );
};

export default About;
