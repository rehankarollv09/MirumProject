import React from "react";
import "./style.css";
import placeholderImage from "../../assets/placeholderImage.png";
import PropTypes from "prop-types";
const MovieCard = ({ posterUrl, title, actors }) => {
  const OnImageErrorOccurred = (e) => {
    e.target.src = placeholderImage;
  };

  return (
    <>
      <div className="movieCard">
        <div className="imageWrapper">
          <img
            src={posterUrl ? posterUrl : placeholderImage}
            alt=""
            onError={OnImageErrorOccurred}
            height={250}
            width={250}
          />
        </div>

        <div className="contentWrapper">
          <h3>{title}</h3>
          <p>
            <span>Starring:</span> {actors}
          </p>
        </div>
      </div>
    </>
  );
};
MovieCard.prototype = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
};

export default MovieCard;
