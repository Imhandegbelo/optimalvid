import React from "react";
import MovieGrid from "../component/MovieGrid";
import { useLikedMovies } from "../context/LikedVideosContext";

const LikedVideos: React.FC = () => {
  const { likedMovies } = useLikedMovies();

  return (
    <div className="space-y-6">
      <h1 className="text-center text-2xl md:text-4xl">Liked Videos</h1>
      {likedMovies.length > 0 ? (
        <MovieGrid
          movies={likedMovies}
          currentPage={1}
          totalPage={1}
          likes={likedMovies}
          setCurrentPage={""}
        />
      ) : (
        <p className="text-gray-600">No liked videos yet!</p>
      )}
    </div>
  );
};

export default LikedVideos;
