import React, { useMemo, useEffect, useState } from "react";
import "./AllCandidates.css";
import GradientBox from "./GradientBox";
import PaginatedTable from "./PaginatedTable";
import Toast from "../Toast";
const AllCandidates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(false);

  const onChangeData = (pagesize, pagenumber) => {
    setPageSize(pagesize);
    setPageNumber(pagenumber);
  };
  useEffect(() => {
    setError(false);
    setLoading(true);
    const url = `https://nextjs14-mock-api.vercel.app/api/prospect?pageSize=${pageSize}&pageNumber=${pageNumber}`;
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        setData(data.data);
        setPagination(data.pagination);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        setError(true);
      });
  }, [pageSize, pageNumber]);

  const columns = useMemo(
    () => [
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
          if (value === "INVITED") {
            return <div className="block-status-button invited">Invited</div>;
          } else if (value === "Declined") {
            return <div className="block-status-button declined">Declined</div>;
          } else if (value === "BLOCKED") {
            return <div className="block-status-button blocked">Blocked</div>;
          } else {
            return (
              <div className="block-status-button open-for-invited">
                Open For Invite
              </div>
            );
          }
        },
      },
    ],
    []
  );

  return (
    <div>
      <GradientBox />
      <PaginatedTable
        columns={columns}
        data={data}
        pagination={pagination}
        onChangeData={onChangeData}
      />

      {loading && (
        <Toast
          errorStyle={false}
          message="Fetching data..."
          visible={loading}
          onClose={() => setLoading(false)}
        />
      )}

      {error && (
        <Toast
          errorStyle={true}
          message="Sorry, please try again later."
          visible={error}
          onClose={() => setError(false)}
        />
      )}
    </div>
  );
};
export default AllCandidates;
