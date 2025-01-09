import "./AllCandidatesActionButton.css";

const AllCandidatesActionButton = ({ buttonName, className }) => {
  const styles = `block-status-button ` + className;
  return <div className={styles}>{buttonName}</div>;
};
export default AllCandidatesActionButton;
