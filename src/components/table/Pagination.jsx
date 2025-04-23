import React, { useState, useEffect } from "react";
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiChevronsLeft, 
  FiChevronsRight 
} from "react-icons/fi";

const Pagination = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  itemsPerPage, 
  onPageChange, 
  onItemsPerPageChange
}) => {
  const [visiblePageNumbers, setVisiblePageNumbers] = useState([]);

  useEffect(() => {
    // Logic to determine which page numbers to show
    const calculateVisiblePages = () => {
      const pages = [];
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + 4);
      
      // Adjust start page if end page is at maximum
      if (endPage === totalPages) {
        startPage = Math.max(1, endPage - 4);
      }
      
      // Build the visible page numbers array
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      setVisiblePageNumbers(pages);
    };
    
    calculateVisiblePages();
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-600">
      {/* Left side - Items count */}
      <div className="mb-2 md:mb-0">
        {totalItems > 0 
          ? `${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems} items` 
          : "0 items"}
      </div>

      {/* Center - Pagination */}
      <div className="flex items-center mb-2 md:mb-0">
        <button
          onClick={() => goToPage(1)}
          className="px-2 py-1 hover:bg-gray-100"
          disabled={currentPage === 1}>
          <span className="flex items-center">
            <FiChevronsLeft className="h-4 w-4" />
            <span className="hidden sm:inline ml-1">First</span>
          </span>
        </button>
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="ml-1 px-2 py-1 hover:bg-gray-100"
          disabled={currentPage === 1}>
          <span className="flex items-center">
            <FiChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline ml-1">Prev</span>
          </span>
        </button>

        {visiblePageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            className={`ml-1 px-3 py-1 rounded ${
              currentPage === pageNum
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}>
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          className="ml-1 px-2 py-1 hover:bg-gray-100"
          disabled={currentPage === totalPages}>
          <span className="flex items-center">
            <span className="hidden sm:inline mr-1">Next</span>
            <FiChevronRight className="h-4 w-4" />
          </span>
        </button>
        <button
          onClick={() => goToPage(totalPages)}
          className="ml-1 px-2 py-1 hover:bg-gray-100"
          disabled={currentPage === totalPages}>
          <span className="flex items-center">
            <span className="hidden sm:inline mr-1">Last</span>
            <FiChevronsRight className="h-4 w-4" />
          </span>
        </button>
      </div>

      {/* Right side - Items per page */}
      <div className="flex items-center">
        <select
          className="border border-gray-300 rounded px-2 py-1"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <span className="ml-2">Items per page</span>
      </div>
    </div>
  );
};

export default Pagination;