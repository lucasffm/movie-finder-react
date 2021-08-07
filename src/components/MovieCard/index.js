import { useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { MovieCardContainer } from "./styles";

function MovieCard() {
  const toast = useToast();

  function handleClick() {
    toast({
      title: "Movie Details.",
      description: "We've created your account for you.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <MovieCardContainer boxShadow="lg" p="2" rounded="xs" bg="white">
      <Link to="/movie/1">
        <img
          className="movie-picture"
          src="https://bleedingcool.com/?attachment_id=1081729"
          alt=""
        />
      </Link>
      <div className="movie-info">
        <h2>Batman</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          aperiam saepe cumque nulla nobis impedit facere cum nemo. Unde quaerat
          odio accusantium iste omnis dicta a soluta quia dolor neque.
        </p>
        <button onClick={handleClick}>Ver detalhes</button>
      </div>
    </MovieCardContainer>
  );
}

export default MovieCard;
