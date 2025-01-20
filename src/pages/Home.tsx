import React, { useContext, useState } from "react";
import right_arrow from "../assets/ArrowRight.svg";
import movies from "../data/movies.json";
import MovieGrid from "../component/MovieGrid";
import hero from "../assets/thumbnail.jpg";
import { LikedMovieContext } from "../context/LikedVideosContext";
import { LikedMovieContextType, Movies } from "../@types.context";

const Home: React.FC = () => {
  const { likedMovies } = useContext(
    LikedMovieContext
  ) as LikedMovieContextType;

  const [query, setQuery] = useState("");

  const filteredMovies = (movies: Movies[], query: string) => {
    if (!query || query === "") return movies;

    return movies.filter((movie) => {
      const lowerCaseQuery = query.toLowerCase();
      const titleMatch = movie.title.toLowerCase().includes(lowerCaseQuery);

      const genreMatch = movie.genre.some((g) =>
        g.toLowerCase().includes(lowerCaseQuery)
      );

      return titleMatch || genreMatch;
    });
  };

  return (
    <div className="px- md:px-12 lg:px-16">
      <div
        className="relative h-[400px] mt-6"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute flex items-center justify-center bg-center bg-cover inset-0 bg-black/70">
          <input
            type="text"
            placeholder="Search by title of tag"
            className="py-1 px-3 rounded border-inset"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="py-10">
        <div className="flex justify-between w-full items-center mb-11">
          <h2 className="text-black text-2xl sm:text-3xl font-semibold">
            Featured Movies
          </h2>
          <a
            href="#"
            aria-label="View more movies"
            className="text-rose-700 text-lg items-center flex gap-2 hover:underline"
          >
            View All
            <span>
              <img src={right_arrow} alt="arrow right" />
            </span>
          </a>
        </div>
        {/* {movies.} */}
        <MovieGrid movies={filteredMovies(movies, query)} likes={likedMovies} />
      </div>
    </div>
  );
};
export default Home;
