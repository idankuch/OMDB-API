import React from "react";
import Card from "../components/UI/Card/Card";

function MovieItem(props) {
  const imgSrc = props.movieData.Poster;
  return (
    <Card className='card'>
      <div>{props.movieData.Title}</div>
      <div>{props.movieData.Year}</div>
      <div>{/* <img src={imgSrc} /> */}</div>
    </Card>
  );
}

export default MovieItem;
