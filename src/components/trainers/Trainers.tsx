import React from "react";
import TrainerCard from "./TrainerCard";
import "../../styles/trainers/Trainers.css";

const Trainers = () => {
  const trainersInfo = [
    {
      id: 1,
      name: "RAMEEZ",
      desc:
        "Cardio Trainer Specializing in stamina and cardiovascular health, Hamza helps clients boost endurance and burn fat with high-intensity workouts.",
      profile: "/images/trainer1.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 2,
      name: "KASHAN",
      desc:
        "Strength & Conditioning Coach Ayesha focuses on building strength and muscle through personalized training programs tailored to each client’s needs.",
      profile: "/images/trainer2.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 3,
      name: "HUZAIFA",
      desc:
        "Yoga & Flexibility Instructor Omar enhances flexibility and balance, guiding clients through yoga and mindful stretching for improved mobility and relaxation.",
      profile: "/images/trainer3.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 4,
      name: "TAHA",
      desc:
        "Nutrition & Wellness Expert Sara offers customized nutrition plans to complement your fitness goals, helping you achieve peak performance and maintain a healthy lifestyle.",
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
