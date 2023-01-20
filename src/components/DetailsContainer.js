import React from "react";
import useFetch from "../hooks/useFetch";

function DetailsContainer(props) {
  const { movie, isLoading, error } = useFetch(props.url);
  // console.log(`URL = ${props.url} || MOVIE DATA = ${JSON.stringify(movie)}`);

  return (
    <>
      {!movie ? (
        <h2>Please enter search title</h2>
      ) : isLoading && !error ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{movie.Title}</h1>
          <h2>{movie.Released}</h2>
        </>
      )}
    </>
  );
}

export default DetailsContainer;
