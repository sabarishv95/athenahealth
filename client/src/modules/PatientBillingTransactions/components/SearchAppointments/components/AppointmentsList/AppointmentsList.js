import React, { useCallback, useContext, useMemo } from "react";
import Table from "../../../../../../commons/components/Table";
import { Wrapper } from "./AppointmentsList.styles";
import PaymentTransactionsContext from "../../../../context";
import moment from "moment";
import { getValue } from "../../../../helpers";
import Api from "../../../../../../API";

function AppointmentsList() {
  const { appointments, setAppointment } = useContext(PaymentTransactionsContext);

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
      accessor: "Action",
    },
  ];

  const data = useMemo(
    () =>
      appointments.map((obj, index) => {
        const totalAmount = getValue(obj.medicalScanDetails, "scanAmount");
        const discount = getValue(obj.medicalScanDetails, "discount");
        const paidAmount = getValue(obj.transactions, "paidAmount");
        const balanceAmount = totalAmount - discount - paidAmount;
        return {
          ...obj,
          Sno: index + 1,
          ageGender: `${obj.age}-${obj.gender}`,
          appointmentDate: moment(obj.appointmentDate).format("MM-DD-YYYY"),
          balanceAmount,
          Action: "Click to pay",
        };
      }),
    [appointments]
  );

  const onCellClick = useCallback(
    (e) => {
      const target = e.target.id;
      if (target.includes("Action")) {
        const index = target.split("_")[1];
        const appointment = appointments[index];
        const api = new Api();
        const query = `query getAppointment($appointment: ID) {
          getAppointment(appointment:$appointment) {
            _id
            patientName
            gender
            age
            appointmentDate
            status
            medicalScanDetails {
              scanName
              scanAmount
              discount
              totalAmount
            }
            transactions{
              date
              paidAmount
              paymentMode
            }
          }
        }`;
        api
          .graphqlRequest(query, { appointment: appointment._id })
          .then((response) => {
            setAppointment(response.data.data.getAppointment);
          })
          .catch((error) => {
            console.log(error);
          });
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
