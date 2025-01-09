import usePagination from "./usePagination";
import PaginatorItems from "./PaginatorItems";
import PaginatorControls from "./PaginatorControls";
import "./Paginator.css";

const Paginator = ({ pagination, onChangeData }) => {
  const {
    currentPage,
    pageSize,
    totalPages,
    canPrevious,
    canNext,
    currentStartIndex,
    currentEndIndex,
    total,
    setCurrentPage,
    setPageSize,
    setCurrentStartIndex,
    setCurrentEndIndex,
    setTotalPages,
  } = usePagination(pagination);

  const onItemsNumberChanged = (pageSize) => {
    const totalPages = Math.ceil(total / pageSize);
    setPageSize(pageSize);
    setCurrentStartIndex(1);
    setCurrentEndIndex(pageSize);
    setTotalPages(totalPages);
    // setCurrentPage(1);
    onChangeData(pageSize, currentPage);
  };

  const gotoPage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      onChangeData(pageSize, newPage);
    }
  };

  return (
    <div className="pagination-container">
      <PaginatorItems
        currentStartIndex={currentStartIndex}
        currentEndIndex={currentEndIndex}
        total={total}
        onItemsNumberChanged={onItemsNumberChanged}
      />
      <PaginatorControls
        canPrevious={canPrevious}
        canNext={canNext}
        currentPage={currentPage}
        totalPages={totalPages}
        gotoPage={gotoPage}
      />
    </div>
  );
};

export default Paginator;
