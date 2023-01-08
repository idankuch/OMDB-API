import React from "react";

function SearchBar(props) {
  const onInputChange = (e) => {
    props.setValue(e.target.value);
  };
  return <input type='text' value={props.value} onChange={onInputChange} />;
}

export default SearchBar;
