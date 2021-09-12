import React, { useContext, useMemo } from "react";
import Table from "../../../../../../commons/components/Table";
import { Wrapper } from "./TransactionList.styles";
import PaymentTransactionsContext from "../../../../context";

function TransactionList() {
  const { appointment } = useContext(PaymentTransactionsContext);

  const columns = [
    {
      Header: "Sno",
      accessor: "Sno",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Paid Amount",
      accessor: "paidAmount",
    },
    {
      Header: "Payment Mode",
      accessor: "paymentMode",
    },
  ];

  const data = useMemo(() => appointment.transactions, [appointment.transactions]);

  return (
    <Wrapper>
      <Table columns={columns} data={data} />
    </Wrapper>
  );
}

export default React.memo(TransactionList);
