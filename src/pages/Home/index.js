import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import MovieList from "../../components/MovieList";
import axios from "axios";

// import { Container } from './styles';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week",
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "pt-BR",
            page,
            limit: 9,
          },
        }
      );
      setIsLoading(false);
      setTotalPages(data.total_pages);
      setMovies((prev) => [...prev, ...data.results]);
    }
    fetch();
  }, [page]);

  const fetchMore = () => {
    if (page + 1 < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <Header></Header>
      <Search></Search>
      <MovieList
        movies={movies}
        isLoading={isLoading}
        handleClick={fetchMore}
      ></MovieList>
    </div>
  );
}

export default Home;
