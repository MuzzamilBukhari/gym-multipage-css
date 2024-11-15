import React from "react";
import TrainerCard from "./TrainerCard";
import "../../styles/trainers/Trainers.css";

const Trainers = () => {
  const trainersInfo = [
    {
      id: 1,
      name: "HAMZA",
      desc:
        "Cardio Trainer dedicated to improving stamina and cardiovascular health.",
      profile: "/images/trainer1.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 2,
      name: "MUZZAMIL",
      desc:
        "Nutrition Coach focused on personalized meal planning for optimal fitness.",
      profile: "/images/trainer2.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 3,
      name: "SARA",
      desc:
        "Strength & Conditioning Coach specializing in power and endurance training.",
      profile: "/images/trainer3.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 4,
      name: "HUZAIFA",
      desc:
        "Mobility & Flexibility Trainer enhancing range of motion and preventing injuries.",
      profile: "/images/trainer4.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
  ];

  return (
    <div className="trainers-container">
      {trainersInfo.map((trainer) => (
        <TrainerCard key={trainer.id} trainer={trainer} />
      ))}
    </div>
  );
};

export default Trainers;
