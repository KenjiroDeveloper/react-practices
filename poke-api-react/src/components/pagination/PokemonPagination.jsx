import { useState } from "react";
export const PokemonPagination = ({ onOffsetChange }) => {
  const totalPages = 145;
  const [offset, setOffset] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    const newOffset = offset + 9;
    setOffset(newOffset);
    setCurrentPage(currentPage + 1);
    onOffsetChange(newOffset);
  };

  const handlePreviosPage = () => {
    const newOffset = offset - 9;
    setOffset(newOffset);
    setCurrentPage(currentPage - 1);
    onOffsetChange(newOffset);
  };

  const PageShorcuts = ({ currentPage, totalPages }) => {
    const pages = [];
    let start = Math.max(currentPage - 3, 0);
    let end = Math.min(currentPage + 2, totalPages);

    for (let i = 1; i <= totalPages; i++) {
      pages.push(<PageButton key={i} page={i}></PageButton>);
    }

    return <div className="flex gap-1">{pages.slice(start, end)}</div>;
  };

  const PagingButton = ({ step }) => {
    if (step === "next") {
      return (
        <button
          type="button"
          className="btn rounded-full"
          onClick={handleNextPage}
        >
          next
        </button>
      );
    }

    if (step === "previous") {
      return (
        <button
          type="button"
          className="btn rounded-full"
          onClick={handlePreviosPage}
        >
          previous
        </button>
      );
    }
  };

  const PageButton = ({ page }) => {
    if (currentPage === page) {
      return (
        <button className="btn rounded-full bg-blue-900 border-none">
          <span className="font-bold text-lg text-slate-300">{page}</span>
        </button>
      );
    }

    return (
      <button className="btn rounded-full bg-slate-300 border-none ">
        <span className="font-bold text-lg text-blue-900">{page}</span>
      </button>
    );
  };

  return (
    <>
      <nav className="w-ful h-fit flex justify-center">
        <div className="w-full sm:w-9/12 flex justify-around p-2">
          <PagingButton step={"previous"} />
          <PageShorcuts
            currentPage={currentPage}
            totalPages={totalPages}
          ></PageShorcuts>
          <PagingButton step={"next"} />
        </div>
      </nav>
    </>
  );
};
