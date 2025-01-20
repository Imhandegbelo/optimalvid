import React, { createContext, ReactNode, useContext, useState } from "react";
import { Movies, LikedMovieContextType } from "../@types.context";

export const LikedMovieContext = createContext<LikedMovieContextType | null>(
  null
);

const LikedMovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [likedMovies, setLikedMovies] = useState<Movies[]>([]);

  const addLiked = (item: Movies) => {
    setLikedMovies([...likedMovies, item]);
  };
  const removeLiked = (id: number) => {
    const newList: Movies[] = likedMovies.filter((item) => item.id !== id);
    setLikedMovies(newList);
  };

  return (
    <LikedMovieContext.Provider value={{ likedMovies, addLiked, removeLiked }}>
      {children}
    </LikedMovieContext.Provider>
  );
};

export const useLikedMovies = () => {
  const context = useContext(LikedMovieContext);
  if (!context) {
    throw new Error("useLikedMovies must be used within a LikedVideosProvider");
  }
  return context;
};

export default LikedMovieProvider;
