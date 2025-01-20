import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Movies } from "../@types.context";
import Pagination from "./Pagination";

interface MovieGridProps {
  movies: Movies[];
  likes: Movies[];
  currentPage: number;
  totalPage: number;
  setCurrentPage: any;
}

const MovieGrid: React.FC<MovieGridProps> = ({
  movies,
  currentPage,
  setCurrentPage,
  totalPage,
  likes,
}) => {
  function checkIsLiked(movie: Movies, likes: Movies[]): boolean {
    return likes.some((m) => m.id === movie.id);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isLiked={checkIsLiked(movie, likes)}
          />
        ))}
      </div>
      {totalPage > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

export default MovieGrid;
