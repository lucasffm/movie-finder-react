import React from "react";

import { Container } from "./styles";
import MovieCard from "../MovieCard";
import { Box, Button, Spinner } from "@chakra-ui/react";

function MovieList({ movies, handleClick, isLoading }) {
  return (
    <div>
      <Container>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center" mb="4">
        {!isLoading && (
          <Button variant="ghost" size="md" onClick={handleClick}>
            Ver mais
          </Button>
        )}
        {isLoading && <Spinner color="red.500" />}
      </Box>
    </div>
  );
}

export default MovieList;
