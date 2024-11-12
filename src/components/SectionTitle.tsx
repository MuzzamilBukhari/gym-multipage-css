import React from "react";
import "../styles/SectionTitle.css";

const SectionTitle = ({ first, second }: { first: string; second: string }) => {
  return (
    <h1 className="section-title">
      {first} <span className="highlight">{second}</span>
    </h1>
  );
};

export default SectionTitle;
