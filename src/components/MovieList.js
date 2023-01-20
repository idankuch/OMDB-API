import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ results }) {
  return results ? (
    <>
      {results.Search.map((item) => {
        return <MovieItem id={item.imdbID} movieData={item} />;
      })}
    </>
  ) : null;
}

export default MovieList;
