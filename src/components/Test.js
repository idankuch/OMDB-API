import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

function Test(props) {
  const { movie, isLoading, error } = useFetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=ba53fbe7"
  );
  console.log("TEST MOVIE DATA:", movie);

  return (
    <>
      {!movie ? (
        <h2>Search title</h2>
      ) : isLoading && !error ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {console.log(props.movie)}
          <h1>{movie.Title}</h1>
          <h2>{movie.Released}</h2>
        </>
      )}
    </>
  );
}

export default Test;
