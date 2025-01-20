import React, { createContext, ReactNode, useState } from "react";
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

export default LikedMovieProvider;
