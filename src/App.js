import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ListContainer from "./components/ListContainer";
import Button from "./components/UI/SearchButton/SearchButton";

import "./App.css";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [url, setUrl] = useState("");
  const onSearch = (url) => {
    setUrl(url);
  };

  return (
    <div className='app'>
      <SearchBar value={movieTitle} setValue={setMovieTitle} />
      <Button
        className='btn'
        searchTitle={movieTitle}
        setSearchTitle={onSearch}
        disabled={movieTitle == ""}
      >
        Search
      </Button>
      <ListContainer url={url} title={movieTitle} />
    </div>
  );
}

export default App;
