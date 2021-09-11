import React from "react";
import Table from "../../../../../../commons/components/Table";

function ScanDetailsTable({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Sno",
        accessor: "Sno",
      },
      {
        Header: "Scan Name",
        accessor: "scanName",
      },
      {
        Header: "Scan Amount",
        accessor: "scanAmount",
      },
      {
        Header: "Discount",
        accessor: "discount",
      },
      {
        Header: "Total Amount",
        accessor: "totalAmount",
      },
    ],
    []
  );

  return <Table columns={columns} data={data ? data : []} />;
}

export default React.memo(ScanDetailsTable);
