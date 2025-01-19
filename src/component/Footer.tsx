import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex align-items-center px-6 py-8 align-items-center text-xs sm:text-md md:text-lg font-bold">
      <div className="mx-auto w-full text-center sm:w-3/5">
        <p className="text-gray-500">
          &copy; 2025 OptimalVid by{" "}
          <a
            href="https://github.com/Imhandegbelo"
            target="_blank"
            className="text-gray-400 hover:text-gray-900 active:text-gray-900 visited:text-gray-900"
          >
            George Imhandgbelo
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
