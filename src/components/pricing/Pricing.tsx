"use client";
import { SectionTitle } from "@/components";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import "../../styles/pricing/Pricing.css";
import "@/styles/pricing/PricingCard.css";
const plans = [
  {
    id: 1,
    title: "STANDARD",
    monthlyPrice: "$40",
    annualPrice: "$400",
    features: [
      "Access to all gym equipment",
      "Group fitness classes",
      "Personal locker",
    ],
  },
  {
    id: 2,
    title: "STANDARD",
    monthlyPrice: "$60",
    annualPrice: "$600",
    features: [
      "Access to all gym equipment",
      "Group fitness classes",
      "Personal locker",
    ],
  },
  {
    id: 3,
    title: "PREMIUM",
    monthlyPrice: "$80",
    annualPrice: "$800",
    features: [
      "24/7 gym access",
      "Personal trainer sessions",
      "Free guest passes",
    ],
  },
  {
    id: 4,
    title: "ELITE",
    monthlyPrice: "$100",
    annualPrice: "$1000",
    features: [
      "All premium benefits",
      "Customized diet plan",
      "Monthly health check-ups",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <SectionTitle first="Pricing" second="Plans" />
          <p className="pricing-description">
            Whether you’re looking for flexibility or the best value, we have
            options for you. Choose between monthly or annual plans and take the
            first step towards achieving your fitness goals.
          </p>
          <div className="billing-cycle-selector">
            {["Monthly", "Annually"].map((cycle) => (
              <button
                key={cycle}
                className={`billing-cycle-btn ${
                  billingCycle === cycle ? "active" : ""
                }`}
                onClick={() => setBillingCycle(cycle)}
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-cards-container">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
