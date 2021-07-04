import React from "react";
import { Link } from "react-router-dom";

import "./ListPodcasts.css";

function ListPodcasts({ cards }) {

  return (
    <div className="card-container">
      {cards.map((card, i) => {
        return (
          <ul className="element" key={i}>
            <li>{card.title}</li>
            <Link to={`/podcast/${card.id}`}>
              <img className="image-card" src={card.image} alt={card.title} />
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default ListPodcasts;
