import React from "react";

export default function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-full-img ${card ? "popup_opened" : ""}`}>
      <div className="popup-full-img__container">
        <button
          className="popup__icon-close"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="popup-full-img__img-wrapper">
          <img
            className="popup-full-img__img"
            src={card?.link}
            alt={card?.name}
          />
          <figcaption className="popup-full-img__text">{card?.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
