import React from "react";
import { MovieControls } from "./MovieControl";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`http://api.tvmaze.com/lookup/shows?thetvdb=304196${movie.image.original}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

// DONE
