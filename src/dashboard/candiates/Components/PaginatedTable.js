import React from "react";
import { useTable, usePagination, useRowSelect } from "react-table";
import "./PaginatedTable.css";
import Paginator from "./Paginator";
const handleCheckboxClick = (event, rowId) => {
  console.log("rowId:" + rowId);
  const input = event.target.previousSibling;
  if (input && input.type === "checkbox") {
    input.click();
  }
};

const PaginatedTable = ({ columns, data, pagination, onChangeData }) => {
  const handlePaginatorData = (pagesize, pagenumber) => {
    setPageSize(pagesize);
    onChangeData(pagesize, pagenumber);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="checkbox-container">
              <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
              <span
                className="checkmark"
                onClick={(e) => handleCheckboxClick(e, -1)}
              ></span>
            </div>
          ),
          Cell: ({ row }) => (
            <div className="checkbox-container">
              <input type="checkbox" {...row.getToggleRowSelectedProps()} />
              <span
                className="checkmark"
                onClick={(e) => handleCheckboxClick(e, row.id)}
              ></span>
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ borderBottom: "solid 1px #E5E7EB" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Paginator pagination={pagination} onChangeData={handlePaginatorData} />
    </div>
  );
};

export default PaginatedTable;
