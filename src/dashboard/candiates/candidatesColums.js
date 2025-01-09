import AllCandidatesActionButton from "./Components/AllCandidatesActionButton";
import candidatesActions from "./candidatesActions";

const candidatesColumns = [
  { Header: "Last Name", accessor: "lastName" },
  { Header: "First Name", accessor: "firstName" },
  { Header: "Chinese Name", accessor: "chineseName" },
  { Header: "Region", accessor: "region" },
  { Header: "District Code", accessor: "districtCode" },
  { Header: "Unit Code", accessor: "unitCode" },
  { Header: "Manager Code", accessor: "managerCode" },
  { Header: "Manager Name", accessor: "managerName" },
  {
    Header: "Blocking Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => {
      const { buttonName, className } =
        candidatesActions[value] || candidatesActions.DEFAULT;
      return (
        <AllCandidatesActionButton
          buttonName={buttonName}
          className={className}
        />
      );
    },
  },
];

export default candidatesColumns;
