import React from "react";
import "./style.css";
import placeholderImage from "../assets/brokeimage.png";
const MovieCard = (props) => {
  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  return (
    <>
      <div className="card">
        <div className="image__container">
          <img
            src={props.posterUrl ? props.posterUrl : placeholderImage}
            alt=""
            onError={onImageError}
            height={250}
            width={250}
          />
        </div>

        <div className="text">
          <h3>{props.title}</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>Starring:</span> {props.actors}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
