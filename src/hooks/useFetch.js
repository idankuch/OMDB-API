import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // console.log("USE--FETCH URL:", url);

  useEffect(() => {
    let isCancelled = false;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((res) => {
        setError(true);
        console.log(`Error: ${res}`);
      });

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return { movie, isLoading, error };
}

export default useFetch;
