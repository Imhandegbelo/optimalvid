import React from "react";
import right_arrow from "../assets/ArrowRight.svg"
import movies from "../data/movies.json";
import MovieGrid from "../component/MovieGrid";

const Home: React.FC = () => {
  return (
    <div className="px- md:px-12 lg:px-16">
      <div className="py-10">
        <div className="flex justify-between border w-full items-center mb-11">
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
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
};
export default Home;
