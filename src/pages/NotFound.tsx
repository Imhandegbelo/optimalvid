import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="h-[400px] flex flex-col gap-4 justify-center">
      <h1 className="text-3xl">404: Page not found</h1>
      <Link
        to="/"
        className="w-fit mx-auto border border-transparent rounded py-2 px-4 hover:border-black"
      >
        Go back Home
      </Link>
    </div>
  );
};
export default NotFound;
