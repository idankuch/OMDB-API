import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

function DetailsContainer(props) {
  console.log(`DETAILS CONTAINER URL: ${props.url}`);
  // const [url, setUrl] = useState(null);
  const { movie, isLoading, error } = useFetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=ba53fbe7"
  );
  console.log("MOVIE DATA:", movie);

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

export default DetailsContainer;
