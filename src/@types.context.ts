export interface Movies {
  id: number;
  title: string;
  description: string;
  duration: string;
  genre: string[];
}

export interface LikedMovieContextType {
  likedMovies: Movies[];
  addLiked: (movie: Movies) => void
  removeLiked: (videoId: number) => void;
}