import React from "react";
import { Link } from "react-router-dom";
import tv from "../assets/tv.png"

const TopNav: React.FC = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link to="/" className="flex items-center font-black font-3xl" aria-label="Optimalvid logo">
        <span><img src={tv} alt="" className="size-6 mr-2" /></span>Optimal<span className="text-rose-700">Vid</span>
      </Link>
      <Link to="/liked" className="hover:text-rose-600">Liked Videos</Link>
    </nav>
  );
};

export default TopNav;
