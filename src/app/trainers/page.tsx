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
              Our certified trainers are dedicated to guiding you every step of
              the way. With personalized fitness plans and expert advice, we
              ensure you reach your goals efficiently and safely.
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
