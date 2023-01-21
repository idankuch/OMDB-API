import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ results }) {
  return results ? (
    <>
      {results.Search.map((item) => {
        return (
          <>
            <h3>{item.Title}</h3>
          </>
        );
      })}
    </>
  ) : null;
}

export default MovieList;
