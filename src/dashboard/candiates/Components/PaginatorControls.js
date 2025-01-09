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
      <PreviousButton
        enable={canPrevious}
        currentPage={currentPage}
        gotoPage={gotoPage}
        arrowImgName={"page_arrow_left.svg"}
        text={"Previous"}
      />

      <PageNumerInput
        currentNumber={currentPage}
        maxNumber={totalPages}
        onNumberChanged={onPageNumberChanged}
      />

      <label className="enable">
        &nbsp;&nbsp;of&nbsp;&nbsp;&nbsp;{totalPages}
      </label>

      <NextButton
        enable={canNext}
        currentPage={currentPage}
        totalPages={totalPages}
        gotoPage={gotoPage}
        arrowImgName={"page_arrow_right.svg"}
        text={"Next"}
      />
    </div>
  );
};
export default PaginatorControls;

const PreviousButton = ({
  enable,
  currentPage,
  gotoPage,
  arrowImgName,
  text,
}) => {
  console.log("text:" + text);
  return (
    <>
      <PreviousNextArrowButton
        enable={enable}
        pageIndex={1}
        gotoPage={gotoPage}
        arrowImgName={arrowImgName}
        text={text}
      />
      <PreviousNextTextButton
        enable={enable}
        pageIndex={currentPage - 1}
        gotoPage={gotoPage}
        text={text}
      />
    </>
  );
};

const NextButton = ({
  enable,
  currentPage,
  totalPages,
  gotoPage,
  arrowImgName,
  text,
}) => {
  return (
    <>
      <PreviousNextTextButton
        enable={enable}
        pageIndex={currentPage + 1}
        gotoPage={gotoPage}
        text={text}
      />
      <PreviousNextArrowButton
        enable={enable}
        pageIndex={totalPages}
        gotoPage={gotoPage}
        arrowImgName={arrowImgName}
        text={text}
      />
    </>
  );
};

const PreviousNextArrowButton = ({
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

const PreviousNextTextButton = ({ enable, pageIndex, gotoPage, text }) => {
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
