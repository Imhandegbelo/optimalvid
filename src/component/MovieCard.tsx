import React from "react";
import { Link } from "react-router-dom";
// import Heart from "../assets/Search.svg";
import thumbnail from "../assets/thumbnail-small.jpg";

interface Props {
  id: number;
  title: string;
  description: string;
  duration: string;
  genre: string[];
  onClick: () => void;
}
const MovieCard: React.FC<Props> = ({ id, title, duration }) => {
  // const [favourite, setFavourite]= useState<number[]>([])

  return (
    <Link to={`/movie/${id}`} className="w-full shadow-2xl">
      <div className="relative flex flex-col justify-cente/r gap-3 bg-gray-100">
        {/* <img
          src={Heart}
          alt="heart"
          // className={`absolute top-2 right-2 h-8 w-8 p-1 rounded-full text-gray-900 hover:bg-rose-500 ${
          //   favourite ? "bg-rose-500" : "bg-gray-900"
          // }`}
          onClick={onClick}
        /> */}
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
