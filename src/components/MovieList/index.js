import React from "react";

import { Container } from "./styles";
import MovieCard from "../MovieCard";

function MovieList({ movies }) {
  return (
    <Container>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
    </Container>
  );
}

export default MovieList;
