import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-rose-400 text-white rounded-l hover:bg-rose-300 disabled:bg-gray-100 disabled:text-black"
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-gray-100">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-rose-400 text-white rounded-r hover:bg-rose-300 disabled:bg-gray-100 disabled:text-black"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
