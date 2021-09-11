import React from "react";
import Table from "../../../../../../commons/components/Table";
import { Wrapper } from "./AppointmentsList.styles";

function AppointmentsList({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Sno",
        accessor: "Sno",
      },
      {
        Header: "Patient Name",
        accessor: "patientName",
      },
      {
        Header: "Age-Gender",
        accessor: "ageGender",
      },
      {
        Header: "AppointmentDate",
        accessor: "appointmentDate",
      },
      {
        Header: "Balance Amount",
        accessor: "balanceAmount",
      },
      {
        Header: "Action",
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

export default React.memo(AppointmentsList);
