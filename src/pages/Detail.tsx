import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies.json";
import vid from "../assets/video.mp4";
// import poster from "../assets/thumbnail-small.jpg";

const Detail: React.FC = () => {
  const { id } = useParams();
  const movie = movies.find((v) => v.id === Number(id));

  return movie ? (
    <div className="my-6">
      <video controls poster="" className="w-full">
        <source src={vid} type="video/mp4" />
      </video>
      <h2 className="text-2xl font-semibold">{movie.title}</h2>
      <p className="text-gray-700">{movie.description}</p>
    </div>
  ) : (
    <p>Video not found.</p>
  );
};
export default Detail;
