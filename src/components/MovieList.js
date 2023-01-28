import React from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";

function MovieList({ results }) {
  return results ? (
    <>
      {results.Search.map((item) => {
        return (
          <>
            <MovieItem key={item.imdbID} movieData={item}></MovieItem>
          </>
        );
      })}
    </>
  ) : null;
}

export default MovieList;
