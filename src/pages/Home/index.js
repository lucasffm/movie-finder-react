import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import MovieList from "../../components/MovieList";

// import { Container } from './styles';

function Home() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <MovieList></MovieList>
    </div>
  );
}

export default Home;
