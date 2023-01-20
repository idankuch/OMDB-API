import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // console.log("USE--FETCH URL:", url);

  useEffect(() => {
    let isCancelled = false;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data);
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

  return { searchResult, isLoading, error };
}

export default useFetch;
