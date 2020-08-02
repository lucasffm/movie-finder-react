import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { MovieCardContainer } from "./styles";

function MovieCard() {
  function handleClick() {
    toast.error("Sucesso!!!");
  }

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
        <Button onClick={handleClick}>Ver detalhes</Button>
      </div>
    </MovieCardContainer>
  );
}

export default MovieCard;
