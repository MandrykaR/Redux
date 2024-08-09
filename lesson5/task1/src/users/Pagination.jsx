import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable =
    currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

  return (
    <div className="pagination">
      <button onClick={goPrev} disabled={!isPrevPageAvailable} className="btn">
        {!isPrevPageAvailable ? null : '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button onClick={goNext} disabled={!isNextPageAvailable} className="btn">
        {!isNextPageAvailable ? null : '→'}
      </button>
    </div>
  );
};

export default Pagination;
