import React from "react";
import Table from "../../../../../../commons/components/Table";
import { Wrapper } from "./ScanDetailsTable.styles";

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

  return (
    <Wrapper>
      <Table columns={columns} data={data ? data : []} />
    </Wrapper>
  );
}

export default React.memo(ScanDetailsTable);
