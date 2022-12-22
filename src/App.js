import MovieCard from "./Component/movieCard";
import { movieData } from "./constant";
import React from "react";
import "./App.css";
function App() {
  const movieList = movieData.movies;
  return (
    <div className="container">
      <div className="card__container">
        {movieList &&
          movieList.length > 0 &&
          movieList.map((movie) => (
            <MovieCard
              posterUrl={movie.posterUrl}
              title={movie.title}
              actors={movie.actors}
              key={movie.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
