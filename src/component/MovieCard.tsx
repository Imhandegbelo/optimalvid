import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Heart from "../assets/Search.svg";
import thumbnail from "../assets/thumbnail-small.jpg";
import { getItems } from "../utils/localStorage.tsx";

interface Props {
  id: number;
  title: string;
  description: string;
  duration: string;
  genre: string[];
  onClick: () => void;
}

interface VidProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  liked: boolean;
  genre: string[];
}

const MovieCard: React.FC<Props> = ({ id, title, duration }) => {
  const [liked, setLiked] = useState(false);
  // const addLike = (id:number)=>{
  //   const likes = JSON.parse(localStorage.getItem("likes"))
  //   localStorage.setItem("likes",JSON.)
  // }

  useEffect(() => {
    const likedVids = JSON.parse(localStorage.getItem("liked"));
    // setLiked(likedVids);
    console.log(likedVids)
  }, [id]);

  const toggleLiked = () => {
    const likedVids = JSON.parse(localStorage.getItem("liked") || []);
    if (liked) {
      const updatedLikes = likedVids.filter((vidID: number) => vidID !== id);
      localStorage.setItem("liked", JSON.stringify(updatedLikes));
    } else {
      likedVids.push(id);
      localStorage.setItem("liked", JSON.stringify(likedVids));
    }
    setLiked(!liked);
  };

  return (
    <Link to={`/movie/${id}`} className="w-full shadow-2xl">
      <div className="relative flex flex-col gap-3 bg-gray-100">
        <button
          onClick={toggleLiked}
          className={`absolute z-50 top-2 right-2 h-8 w-8 p-1 rounded-full ${
            liked ? "bg-rose-500" : "bg-gray-300"
          }`}
        >
          {liked ? "❤️" : "♡"}
        </button>

        <img src={thumbnail} alt={title} className="w-full h-" />

        <div className="px-4 text-left">
          <h2 className="text-lg font-semibold text-gray-900">
            Title: {title}
          </h2>
          <p className="text-sm text-gray-600">Duration: {duration}</p>
        </div>

        <div className="flex wrap items-center text-stone-500">
          {/* {genres.map((genre, index) => (
            <div
              key={index}
              className="sm:ml-3 text-xs text-gray-400 lg:text-base font-semibold"
            >
              {genre.name}
            </div>
          ))} */}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
