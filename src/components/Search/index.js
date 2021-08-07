import React from "react";
import { MdClose } from "react-icons/md";

import { Container, MovieAutoComplete } from "./styles";

function Search() {
  return (
    <Container>
      <MovieAutoComplete
        placeholder="Digite aqui o filme que está procurando..."
        allowClear
        icon={MdClose}
        variant="filled"
        size="lg"
      ></MovieAutoComplete>
    </Container>
  );
}

export default Search;
