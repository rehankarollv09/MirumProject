import MovieCard from "./Component/MovieCard/movieCard";
import movieData from "./data";
import React from "react";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="moviesCardWrapper">
        {movieData?.length > 0 &&
          movieData.map(({ id, posterUrl, title, actors }) => (
            <MovieCard
              posterUrl={posterUrl}
              title={title}
              actors={actors}
              key={id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
