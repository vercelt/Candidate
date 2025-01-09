import React, { useEffect, useState } from "react";
import "./AllCandidates.css";
import GradientBox from "./Components/GradientBox";
import PaginatedTable from "./Components/PaginatedTable";
import Toast from "../Toast";
import candidatesColumns from "./candidatesColums";
import { fetchCandidatesApi } from "./candidatesApi";

const AllCandidates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCandidatesApi(
      pageSize,
      pageNumber,
      setData,
      setPagination,
      setError,
      setLoading
    );
  }, [pageSize, pageNumber, setData, setPagination, setError, setLoading]);

  const onChangeData = (newPageSize, newPageNumber) => {
    setPageSize(newPageSize);
    setPageNumber(newPageNumber);
  };

  return (
    <div>
      <GradientBox />
      <PaginatedTable
        columns={candidatesColumns}
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
