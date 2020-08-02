import React from "react";
import { Card, Button } from "antd";

import { MovieCardContainer } from "./styles";
import { Link } from "react-router-dom";

function MovieCard() {
  return (
    <MovieCardContainer>
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
        <Button>Ver detalhes</Button>
      </div>
    </MovieCardContainer>
  );
}

export default MovieCard;
