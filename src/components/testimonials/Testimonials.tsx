import React from "react";
import TestimonialCard from "./TestimonialCard";
import { SectionTitle } from "@/components";
import "../../styles/testimonials/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "SAMEER AWAN",
      desc:
        "Joining this gym has been a game-changer for me! The trainers are knowledgeable, and the support from the community keeps me motivated every day.",
      imgSrc: "/images/testemonial1.jpg",
    },
    {
      id: 2,
      name: "SAAD ALI",
      desc:
        "I’ve seen amazing progress in just a few months. The equipment is top-notch, and the atmosphere is always welcoming!",
      imgSrc: "/images/testemonial2.jpg",
    },
    {
      id: 3,
      name: "USAMA KHAN",
      desc:
        "This is more than a gym—it's a second home. I've not only achieved my fitness goals but also gained confidence and new friends along the way!",
      imgSrc: "/images/testemonial3.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <SectionTitle first="Our" second="Testimonials" />
        <p className="testimonials-description">
          Real Results, Real Stories: See What Our Members Have to Say!
        </p>
        <div className="testimonials-cards">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
