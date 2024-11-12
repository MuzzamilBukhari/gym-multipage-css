import React from "react";
// import { FaCheck } from "react-icons/fa";
import "../../styles/pricing/PricingCard.css";
type Plan = {
  id: number;
  title: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
};

const PricingCard = ({
  billingCycle,
  plan,
}: {
  billingCycle: string;
  plan: Plan;
}) => {
  return (
    <div className="">
      <div className="pricing-card">
        <h2 className="plan-title">{plan.title}</h2>
        <h1 className="price">
          {billingCycle === "Monthly" ? plan.monthlyPrice : plan.annualPrice}
          <span className="price-duration">
            {billingCycle === "Monthly" ? "/mo" : "/yr"}
          </span>
        </h1>
        {plan.features.map((feature) => (
          <p key={feature} className="feature-item">
            <span className="feature-icon">
              {/* <FaCheck className="icon" /> */}
            </span>
            {feature}
          </p>
        ))}
        <button className="join-button">Join Now</button>
      </div>
    </div>
  );
};

export default PricingCard;
