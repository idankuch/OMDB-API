import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import DetailsContainer from "./components/DetailsContainer";
import Button from "./components/UI/SearchButton/SearchButton";

import "./App.css";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [url, setUrl] = useState("");

  const onSearch = (url) => {
    setUrl(url);
  };

  return (
    <div className=''>
      <SearchBar value={movieTitle} setValue={setMovieTitle} />
      <Button searchTitle={movieTitle} setSearchTitle={onSearch}>
        Search
      </Button>
      <DetailsContainer url={url} />
    </div>
  );
}

export default App;
