import React from "react";
import useFetch from "../hooks/useFetch";
import MovieList from "./MovieList";

function DetailsContainer(props) {
  const { searchResult, isLoading, error } = useFetch(props.url);
  console.log(`URL = ${props.url} || MOVIE DATA = ${searchResult}`);

  return (
    <>
      {!searchResult ? (
        <h2>Please enter search title</h2>
      ) : isLoading && !error ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h2>{`${searchResult.totalResults} movies matches '${props.title}'`}</h2>
          <br />
          <MovieList results={searchResult} />
        </>
      )}
    </>
  );
}

export default DetailsContainer;
