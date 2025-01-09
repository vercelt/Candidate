import { useState, useEffect } from "react";

const usePagination = (pagination) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [currentStartIndex, setCurrentStartIndex] = useState(1);
  const [currentEndIndex, setCurrentEndIndex] = useState(10);
  const [total, setTotal] = useState(0);
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
    setCanPrevious(initialCurrentPage > 1);
    setTotal(pagination.total);
  }, [pagination]);

  return {
    currentPage,
    pageSize,
    totalPages,
    canPrevious,
    canNext,
    currentStartIndex,
    currentEndIndex,
    total,
    setPageSize,
    setCurrentStartIndex,
    setCurrentEndIndex,
    setTotalPages,
  };
};

export default usePagination;
