import React, { useState } from "react";
import MovieCard from "./MovieCard";

interface Movies {
  id: number;
  title: string;
  description: string;
  duration: string;
  genre: string[];
}

interface MovieGridProps {
  movies: Movies[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  const [liked, setLiked] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setLiked([...liked, id]);
  };
  
  return (
    <div className="grid md:grid-cols-2 lg: grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          description={movie.description}
          duration={movie.duration}
          genre={movie.genre}
          onClick={() => handleClick(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
