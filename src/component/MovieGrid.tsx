import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Movies } from "../@types.context";

interface MovieGridProps {
  movies: Movies[];
  likes: Movies[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, likes }) => {
  function checkIsLiked(movie: Movies, likes: Movies[]): boolean {
    return likes.some((m) => m.id === movie.id);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg: grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isLiked={checkIsLiked(movie, likes)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
