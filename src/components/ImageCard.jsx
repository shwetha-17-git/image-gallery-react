import React from "react";
import "./ImageCard.css";

function ImageCard({ image }) {
  return (
    <div className="img-card">
      <img src={image.url} alt={image.title} loading="lazy" />
      <div className="img-card-body">
        <h3 className="img-card-title">{image.title}</h3>
        <p className="img-card-desc">{image.description}</p>
        <span className="img-card-tag">{image.category}</span>
      </div>
    </div>
  );
}

export default ImageCard;
