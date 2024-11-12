import React from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import "../../styles/testimonials/TestimonialCard.css"; // Import the CSS file

type Testimonial = {
  name: string;
  desc: string;
  imgSrc: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, imgSrc, desc } = testimonial;
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <Image
          alt="profile"
          className="testimonial-image"
          src={imgSrc}
          width={80}
          height={80}
        />
        <p className="testimonial-description">{desc}</p>
        <div className="testimonial-stars">
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
        </div>
        <h2 className="testimonial-name">{name}</h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
