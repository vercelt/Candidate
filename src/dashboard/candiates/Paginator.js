import { useState, useEffect } from "react";
import "./Paginator.css";
import PageNumerInput from "./PageNumberInput";

const Paginator = ({ pagination, onChangeData }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(1);
  const [currentEndIndex, setCurrentEndIndex] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const initialPageSize =
      pagination && pagination.pageSize ? pagination.pageSize : 10;
    const initialStartIndex =
      pagination && pagination.pageNumber && pagination.pageSize
        ? (pagination.pageNumber - 1) * initialPageSize + 1
        : 1;
    const initialEndIndex =
      pagination && pagination.pageNumber && pagination.pageSize
        ? pagination.pageNumber * pagination.pageSize
        : 10;
    const initialCurrentPage =
      pagination && pagination.pageNumber ? pagination.pageNumber : 1;
    setCurrentPage(initialCurrentPage);
    setCurrentEndIndex(initialEndIndex);
    setCurrentStartIndex(initialStartIndex);
    setTotalPages(pagination.totalPages);
    setPageSize(pagination.pageSize);
    setCanNext(initialCurrentPage < pagination.totalPages);
    setCanPrevious(initialCurrentPage > 1 ? true : false);
  }, [pagination]);

  const handleChangeData = (event) => {
    const pagesize = event.target.value;
    const totalpages = Math.ceil(pagination.total / pagesize);
    setPageSize(pagesize);
    setCurrentStartIndex(1);
    setCurrentEndIndex(pagesize);
    setTotalPages(totalpages);
    setCurrentPage(1);
    onChangeData(pagesize, currentPage);
  };

  const onPageNumberChanged = (pagenumber) => {
    console.log("pagenumber:" + pagenumber);
    onChangeData(pageSize, pagenumber);
  };

  const handleNextClick = () => {
    const nextPage = currentPage + 1;
    onChangeData(pageSize, nextPage);
  };

  const handlePreviousClick = () => {
    const previousPage = currentPage - 1;
    onChangeData(pageSize, previousPage);
  };

  const handleGoToPageClick = (page) => {
    onChangeData(pageSize, page);
  };

  return (
    <div className="pagination-container">
      <div className="pagination-left-items">
        <span> Items per page </span>
        <div class="input-container">
          <input
            type="text"
            class="styled-input"
            defaultValue="10"
            onBlur={handleChangeData}
          />
          <img
            className="arrow"
            src="/images/page_arrow_down.png"
            alt="arrow-down"
            data-effect="arrow"
          />
        </div>
        <span>
          {currentStartIndex}-{currentEndIndex} of {pagination.total} Items
        </span>
      </div>

      <div className="page-operation-container">
        <button disabled={!canPrevious} onClick={() => handleGoToPageClick(1)}>
          <img
            className={
              canPrevious ? "page-arrow svg-enable" : "page-arrow svg-disable"
            }
            src="/images/page_arrow_left.svg"
            alt="Previous"
          />
        </button>
        <button
          className={canPrevious ? "enable" : "disable"}
          onClick={handlePreviousClick}
          disabled={!canPrevious}
        >
          Previous&nbsp;&nbsp;
        </button>
        <PageNumerInput
          currentNumber={currentPage}
          maxNumber={totalPages}
          onNumberChanged={onPageNumberChanged}
        />
        <label className="enable">
          &nbsp;&nbsp;of&nbsp;&nbsp;&nbsp;{totalPages}
        </label>
        <button
          className={canNext ? "enable" : "disable"}
          onClick={handleNextClick}
          disabled={!canNext}
        >
          Next
        </button>
        <button
          onClick={() => handleGoToPageClick(totalPages)}
          disabled={!canNext}
        >
          <img
            className={
              canNext ? "page-arrow svg-enable" : "page-arrow svg-disable"
            }
            src="/images/page_arrow_right.svg"
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
