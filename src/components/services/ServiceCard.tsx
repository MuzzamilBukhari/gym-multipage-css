import React from "react";
import Image from "next/image";
import "../../styles/services/ServiceCard.css";

const ServiceCard = ({
  name,
  image,
  imageAlt,
}: {
  name: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <div className="service-card">
      <div className="service-card-image-wrapper">
        <Image
          src={image}
          alt={imageAlt}
          width={500}
          height={500}
          className="service-card-image"
        />
      </div>
      <h2 className="service-card-title">{name}</h2>
    </div>
  );
};

export default ServiceCard;
