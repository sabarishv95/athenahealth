import React, { useContext, useMemo } from "react";
import Table from "../../../../../../commons/components/Table";
import { Wrapper } from "./ScanDetailsTable.styles";
import PaymentDetailsContext from "../../../../context";

function ScanDetailsTable() {
  const { paymentDetails } = useContext(PaymentDetailsContext);

  const columns = [
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
  ];

  const data = useMemo(
    () => paymentDetails.medicalScanDetails,
    [paymentDetails.medicalScanDetails]
  );

  return (
    <Wrapper>
      <Table columns={columns} data={data} />
    </Wrapper>
  );
}

export default React.memo(ScanDetailsTable);
