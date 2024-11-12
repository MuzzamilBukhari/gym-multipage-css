import React from "react";
import ServiceCard from "./ServiceCard";
import { SectionTitle } from "..";
import "../../styles/services/Services.css";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Physical Fitness",
      imageUrl:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Weight Gain",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Strength Training",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaik2BDGngXwj5M3_Lb7FCMD3OiKsF9QJboQ&s",
    },
    {
      id: 4,
      name: "Fat Loss",
      imageUrl:
        "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA5MjM2NjAxMzI1MjMzNzc2/weight-loss-exercise-plan.jpg",
    },
    {
      id: 5,
      name: "Weight Lifting",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfBvCnUif3Ai_cICfYKayEDyhP8IVOsE1RQ&s",
    },
    {
      id: 6,
      name: "Running",
      imageUrl:
        "https://img.freepik.com/free-photo/young-athletic-man-running-treadmill-gym_637285-8364.jpg",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <SectionTitle first="Our" second="Services" />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              name={service.name}
              image={service.imageUrl}
              imageAlt={service.name}
              key={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
