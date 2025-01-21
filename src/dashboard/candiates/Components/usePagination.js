import { useState, useEffect } from "react";
import { PaginatorConstants } from "./paginator-constants";
const usePagination = (pagination) => {
  const [currentPage, setCurrentPage] = useState(
    PaginatorConstants.CURRENT_PAGE_DEFAULE_VALUE
  );
  const [pageSize, setPageSize] = useState(
    PaginatorConstants.PAGE_SIZE_DEFAULT_VALUE
  );
  const [totalPages, setTotalPages] = useState(
    PaginatorConstants.CURRENT_TOTAL_DEFAULT_VALUE
  );
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [currentStartIndex, setCurrentStartIndex] = useState(
    PaginatorConstants.CURRENT_START_DEFAULT_VALUE
  );
  const [currentEndIndex, setCurrentEndIndex] = useState(
    PaginatorConstants.CURRENT_END_DEFAULT_VALUE
  );
  const [total, setTotal] = useState(
    PaginatorConstants.TOTAL_PAGES_DEFAULT_VALUE
  );
  useEffect(() => {
    const initialPageSize =
      pagination && pagination.pageSize
        ? pagination.pageSize
        : PaginatorConstants.PAGE_SIZE_DEFAULT_VALUE;
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
