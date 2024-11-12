import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../../styles/trainers/TrainerCard.css";
type Trainer = {
  id: number;
  name: string;
  desc: string;
  profile: string;
  fbLink: string;
  xLink: string;
  instaLink: string;
};

const TrainerCard = ({ trainer }: { trainer: Trainer }) => {
  const { name, desc, profile } = trainer;
  return (
    <div className="trainer-card">
      <div className="trainer-info">
        <Image
          alt="trainer"
          className="trainer-image"
          src={profile}
          width={200}
          height={200}
        />
        <div className="trainer-text">
          <h2 className="trainer-name">{name}</h2>
          <p className="trainer-description">{desc}</p>
          <span className="social-icons">
            <a>
              <FaFacebook className="social-icon" />
            </a>
            <a>
              <FaSquareXTwitter className="social-icon" />
            </a>
            <a>
              <FaInstagramSquare className="social-icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
