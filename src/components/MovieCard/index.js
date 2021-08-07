import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { MovieCardContainer } from "./styles";

function MovieCard({ movie }) {
  const toast = useToast();

  function handleClick() {
    toast({
      title: movie.title,
      description: movie.overview,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  function formatOverview(overview) {
    const max = 240;

    return overview.length > max
      ? overview.substring(0, max - 3) + "..."
      : overview;
  }

  return (
    <MovieCardContainer boxShadow="lg" rounded="xs" bg="white">
      <Link to="/movie/1">
        <img
          className="movie-picture"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}?api_key=5d8ecb9c88c5bff2fdb18aa145c3debd`}
          alt=""
        />
      </Link>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        p="2"
        h="340px"
      >
        <Box display="flex" flexDirection="column">
          <Text textAlign="center" fontSize="xl">
            {movie.title}
          </Text>
          <Text fontSize="md" textAlign="justify" mt="2">
            {formatOverview(movie.overview)}
          </Text>
        </Box>
        <div>
          <Button variant="ghost" size="md" onClick={handleClick}>
            Ver mais
          </Button>
        </div>
      </Box>
    </MovieCardContainer>
  );
}

export default MovieCard;
