import React, { useCallback, useContext, useState } from "react";
import Api from "../../../../API";
import AppointmentsList from "./components/AppointmentsList";
import CommonSearch from "./components/CommonSearch";
import FromDate from "./components/FromDate";
import PaymentStatus from "./components/PaymentStatus";
import ToDate from "./components/ToDate";
import { StyledWrapper } from "./SearchAppointments.styles";
import PaymentTransactionsContext from "../../context";

function SearchAppointments() {
  const [state, updateState] = useState({
    fromDate: "",
    toDate: "",
    status: "",
    patientName: "",
  });

  const { setAppointments } = useContext(PaymentTransactionsContext);

  const onSearch = useCallback(() => {
    const api = new Api();
    const query = `query searchAppointments($fromDate:Date, $toDate:Date, $status:String, $patientName: String) {
      searchAppointments(fromDate:$fromDate, toDate: $toDate, status: $status, patientName: $patientName) {
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
      .graphqlRequest(query, { ...state })
      .then((response) => {
        setAppointments(response.data.data.searchAppointments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setAppointments, state]);

  return (
    <StyledWrapper>
      <FromDate state={state} updateState={updateState} />
      <ToDate state={state} updateState={updateState} />
      <PaymentStatus state={state} updateState={updateState} />
      <CommonSearch state={state} updateState={updateState} onSearch={onSearch} />
      <AppointmentsList />
    </StyledWrapper>
  );
}

export default React.memo(SearchAppointments);
