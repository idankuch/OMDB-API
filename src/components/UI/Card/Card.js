import React from "react";
import "./Card.css";

const Card = function (props) {
  const alert = () => console.log("movie clicked");

  return (
    <div className={props.className} onClick={alert}>
      {props.children}
    </div>
  );
};

export default Card;
