import React from "react";
import { SectionTitle, Trainers } from "@/components";
import "../../styles/trainers/Trainer.page.css";

const page = () => {
  return (
    <div>
      <section className="trainers-section">
        <div className="section-content">
          <div className="title-container">
            <SectionTitle first="Our" second="Trainers" />
            <p className="description-text">
              Meet our dedicated trainers who are here to help you, from
              strength training to flexibility and endurance, each team member
              brings unique expertise to ensure you get the most out of every
              session. Let’s crush those goals together!
            </p>
          </div>
          <div className="trainers-container">
            <Trainers />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
