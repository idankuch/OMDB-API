import React from "react";
import Card from "../components/UI/Card/Card";

function MovieItem(props) {
  const imgSrc = props.movieData.Poster;
  return (
    <Card className='card'>
      <div className='moviename'>
        <b>{props.movieData.Title}</b>
      </div>
      <div>{props.movieData.Year}</div>
      <div
        className='movie-poster'
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
    </Card>
  );
}

export default MovieItem;
