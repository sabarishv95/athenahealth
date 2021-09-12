import React, { useCallback, useContext, useMemo } from "react";
import Table from "../../../../../../commons/components/Table";
import { Wrapper } from "./AppointmentsList.styles";
import PaymentTransactionContext from "../../../../context";

function AppointmentsList() {
  const { appointments, setAppointment } = useContext(PaymentTransactionContext);

  const columns = [
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
  ];

  const data = useMemo(() => appointments, [appointments]);

  const onCellClick = useCallback(
    (e) => {
      const target = e.target.id;
      if (target.includes("Action")) {
        const index = target.split("_")[1];
        const appointment = appointments[index];
        setAppointment(appointment);
      }
    },
    [appointments, setAppointment]
  );

  return (
    <Wrapper>
      <Table columns={columns} data={data} onCellClick={onCellClick} />
    </Wrapper>
  );
}

export default React.memo(AppointmentsList);
