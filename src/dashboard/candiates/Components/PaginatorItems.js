import "./PaginatorItems.css";
const PaginatorItems = ({
  currentStartIndex,
  currentEndIndex,
  total,
  onItemsNumberChanged,
}) => {
  const handleItemsNumberChanged = (event) => {
    const pageSize = event.target.value;
    onItemsNumberChanged(pageSize);
  };
  return (
    <div className="pagination-left-items">
      <span> Items per page </span>
      <div class="input-container">
        <input
          type="text"
          class="styled-input"
          defaultValue="10"
          onBlur={handleItemsNumberChanged}
        />
        <img
          className="arrow"
          src="/images/page_arrow_down.png"
          alt="arrow-down"
          data-effect="arrow"
        />
      </div>
      <span>
        {currentStartIndex}-{currentEndIndex} of {total} Items
      </span>
    </div>
  );
};
export default PaginatorItems;
