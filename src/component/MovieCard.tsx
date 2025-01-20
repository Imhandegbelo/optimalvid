import React, { useContext } from "react";
import { Link } from "react-router-dom";
import thumbnail from "../assets/thumbnail-small.jpg";
import { LikedMovieContext } from "../context/LikedVideosContext";
import { LikedMovieContextType, Movies } from "../@types.context";

interface Props {
  movie: Movies;
  isLiked: boolean;
}

const MovieCard: React.FC<Props> = ({ movie, isLiked }) => {
  const { addLiked, removeLiked } = useContext(
    LikedMovieContext
  ) as LikedMovieContextType;

  const toggleLiked = () => {
    if (!isLiked) {
      addLiked(movie);
    } else {
      removeLiked(movie.id);
    }
  };

  return (
    <div className=" relative flex flex-col gap-3 bg-gray-100">
      <button
        onClick={toggleLiked}
        className={`absolute flex items-center justify-center z-50 top-2 right-2 h-8 w-8 p-2 rounded-full ${
          isLiked ? "bg-rose-500" : "bg-gray-300"
        }`}
      >
        {isLiked ? "❤️" : "♡"}
      </button>
      <Link to={`/movie/${movie.id}`} className="w-full shadow-2xl">
        <img src={thumbnail} alt={movie.title} className="w-full h-" />

        <div className="px-4 text-left">
          <h2 className="text-lg font-semibold text-gray-900">
            Title: {movie.title}
          </h2>
          <p className="text-sm text-gray-600">Duration: {movie.duration}</p>
        </div>

        <div className="flex wrap items-center text-stone-500">
          {/* {genres.map((genre, index) => (
            <div
              key={index}
              className="sm:ml-3 flex gap-3 text-xs text-gray-400 lg:text-base font-semibold"
            >
              {movie.genre.map((g)=>(
                <small>{g}</small>
              ))}
            </div>
          ))} */}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
