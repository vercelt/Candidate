import React, { useMemo, useEffect, useState } from "react";
import "./AllCandidates.css";
import GradientBox from "./GradientBox";
import PaginatedTable from "./PaginatedTable";

const AllCandidates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const onChangeData = (pagesize, pagenumber) => {
    setPageSize(pagesize);
    setPageNumber(pagenumber);
  };
  useEffect(() => {
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        const mockData = {
          data: mock_data,
          pagination: {
            total: 100,
            pageSize: pageSize,
            pageNumber: pageNumber,
            totalPages: 10,
          },
        };
        setData(mockData.data);
        setPagination(mockData.pagination);
        setLoading(false);
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

  const mock_data = [
    {
      lastname: "Alice",
      firstname: "Jessica",
      chinesename: "黃潔宜",
      region: "2001 Region A",
      districtcode: "District 1",
      unitcode: "0000",
      managercode: "7654320",
      managername: "Sonia Tam",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 0,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 2,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 3,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 2,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
    {
      lastname: "Alice",
      firstname: "",
      chinesename: "",
      region: "",
      districtcode: "",
      unitcode: "",
      managercode: "",
      managername: "",
      blockingstatus: 1,
    },
  ];

  return (
    <div>
      <GradientBox />
      <PaginatedTable
        columns={columns}
        data={data}
        pagination={pagination}
        onChangeData={onChangeData}
      />
    </div>
  );
};
export default AllCandidates;
