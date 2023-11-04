"use client";

import Link from "next/link";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  currentPage,
  totalPages,
}) => {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    numberPageItems.push(
      <Link
        href={`?page=${page}`}
        key={page}
        className={`btn join-item ${
          currentPage === page ? "btn-active pointer-events-none" : ""
        }`}
      >
        {page}
      </Link>
    );
  }

  return (
    <>
      <div className="join hidden sm:block ">{numberPageItems}</div>
      <div className="join block sm:hidden ">
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`} className="btn join-item">
            «
          </Link>
        )}
        <button className="btn join-item pointer-events-none">
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link href={`?page=${currentPage + 1}`} className="btn join-item">
            »
          </Link>
        )}
      </div>
    </>
  );
};

export default PaginationBar;
