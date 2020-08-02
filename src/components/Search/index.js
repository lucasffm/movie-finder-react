import React from "react";
import { MdClose } from "react-icons/md";

import { Container, MovieAutoComplete, SearchTitle } from "./styles";

function Search() {
  return (
    <Container>
      <SearchTitle>Bem vindo ao Movie Finder</SearchTitle>
      <MovieAutoComplete
        placeholder="Digite aqui o filme que está procurando..."
        size="large"
        allowClear
        clearIcon={MdClose}
      ></MovieAutoComplete>
    </Container>
  );
}

export default Search;
