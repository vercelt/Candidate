import PageNumerInput from "./PageNumberInput";
import "./PaginatorControls.css";

const PaginatorControls = ({
  canPrevious,
  canNext,
  currentPage,
  totalPages,
  gotoPage,
}) => {
  const onPageNumberChanged = (pageNumber) => {
    gotoPage(pageNumber);
  };

  return (
    <div className="page-operation-container">
      <PaginatorControlButton
        enable={canPrevious}
        arrowPageIndex={1}
        textPageIndex={currentPage - 1}
        gotoPage={gotoPage}
        arrowImgName={"page_arrow_left.svg"}
        text={"Previous"}
        isPrevious={true}
      />

      <PageNumerInput
        currentNumber={currentPage}
        maxNumber={totalPages}
        onNumberChanged={onPageNumberChanged}
      />

      <label className="enable">
        &nbsp;&nbsp;of&nbsp;&nbsp;&nbsp;{totalPages}
      </label>

      <PaginatorControlButton
        enable={canNext}
        arrowPageIndex={totalPages}
        textPageIndex={currentPage + 1}
        gotoPage={gotoPage}
        arrowImgName={"page_arrow_right.svg"}
        text={"Next"}
        isPrevious={false}
      />
    </div>
  );
};
export default PaginatorControls;

const PaginatorControlButton = ({
  enable,
  arrowPageIndex,
  textPageIndex,
  gotoPage,
  arrowImgName,
  text,
  isPrevious,
}) => {
  const arrowButton = (
    <PaginatorArrowButton
      enable={enable}
      pageIndex={arrowPageIndex}
      gotoPage={gotoPage}
      arrowImgName={arrowImgName}
      text={text}
    />
  );

  const textButton = (
    <PaginatorTextButton
      enable={enable}
      pageIndex={textPageIndex}
      gotoPage={gotoPage}
      text={text}
    />
  );
  const firstButton = isPrevious ? arrowButton : textButton;
  const secondButton = isPrevious ? textButton : arrowButton;
  return (
    <>
      {firstButton}
      {secondButton}
    </>
  );
};

const PaginatorArrowButton = ({
  enable,
  pageIndex,
  gotoPage,
  arrowImgName,
  text,
}) => {
  const arrow = "/images/" + arrowImgName;
  return (
    <button disabled={!enable} onClick={() => gotoPage(pageIndex)}>
      <img
        className={enable ? "page-arrow svg-enable" : "page-arrow svg-disable"}
        src={arrow}
        alt={text}
      />
    </button>
  );
};

const PaginatorTextButton = ({ enable, pageIndex, gotoPage, text }) => {
  return (
    <button
      className={enable ? "enable" : "disable"}
      onClick={() => gotoPage(pageIndex)}
      disabled={!enable}
    >
      {text}
    </button>
  );
};
