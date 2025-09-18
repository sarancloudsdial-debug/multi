import React from "react";

const GrowthCard = ({ image, title, desc }) => {
  return (
    <div className="growth-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default GrowthCard;
