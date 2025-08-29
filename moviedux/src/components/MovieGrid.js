import React from "react";
import "../styles.css";

import { useState, useEffect } from "react";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]); //[state variable , function to update state] = state initialization the [] are empty you want to initialize the state with nothing or a default value

  // const m = ["a", "b", "c", "d"];
  // setMovies(m); this will cause an infinite loop
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []); // function, repetition or when we want to see this function again

  // const loadedMovies = ...
  // setMovies(loadedMovies)
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`images/${movie.image}`} alt={movie.title} />
          <div>
            <h3 className="movie-cart-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
