import React, { useCallback } from "react";
import { useTable } from "react-table";

function Table({ columns, data, onCellClick }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const onClick = useCallback(
    (e) => {
      if (onCellClick) onCellClick(e);
    },
    [onCellClick]
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                const cellProps = cell.getCellProps();
                return (
                  <td id={cellProps.key} {...cellProps} onClick={onClick}>
                    {cellProps.key.includes("Action") ? "Click to Pay" : cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default React.memo(Table);
