import React from "react";
import { MdSearch } from "react-icons/md";

import { Container, MovieAutoComplete } from "./styles";

function Search() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const handleClick = (event) => {};

  return (
    <Container>
      <MovieAutoComplete
        placeholder="Digite aqui o filme que está procurando..."
        icon={MdSearch}
        variant="outline"
        background="white"
        size="lg"
        onChange={handleChange}
        handleClick={handleClick}
      ></MovieAutoComplete>
    </Container>
  );
}

export default Search;
