import React from "react";
import "./ServiceCard.css";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
