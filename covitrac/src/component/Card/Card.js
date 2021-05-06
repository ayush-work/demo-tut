import React from "react";
import "./Card.css";

const Card = ({ cases, id, today }) => {
  const convert = (string) => {
    const changed = parseInt(string, 10).toLocaleString();
    return changed;
  };
  return (
    <div className={`card ${id}`}>
      <h1 className="card__title">{id}</h1>
      <h2 className="card__cases">{convert(cases)}</h2>
      <h3 className="card__increase">
        {today ? `Today's increase: ${convert(today)} ` : ""}
        {today ? <i class="bx bx-up-arrow-alt"></i> : ""}
      </h3>
    </div>
  );
};

export default Card;
