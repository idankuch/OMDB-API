import React from "react";
import "./SearchButton.css";

function Button(props) {
  const onSearchMovie = () => {
    const movieTitle = props.searchTitle.replaceAll(" ", "+");
    const url = `http://www.omdbapi.com/?s=${movieTitle}&apikey=ba53fbe7`;
    props.setSearchTitle(url);
  };

  return (
    <button
      className={props.className}
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={onSearchMovie}
    >
      {props.children}
    </button>
  );
}

export default Button;
