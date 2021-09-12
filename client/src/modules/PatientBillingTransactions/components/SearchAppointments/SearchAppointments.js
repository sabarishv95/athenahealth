import React, { useState } from "react";
import AppointmentsList from "./components/AppointmentsList";
import CommonSearch from "./components/CommonSearch";
import FromDate from "./components/FromDate";
import PaymentStatus from "./components/PaymentStatus";
import ToDate from "./components/ToDate";
import { StyledWrapper } from "./SearchAppointments.styles";

function SearchAppointments() {
  const [state, updateState] = useState({
    fromDate: "",
    toDate: "",
    status: "",
    patientName: "",
  });

  return (
    <StyledWrapper>
      <FromDate state={state} updateState={updateState} />
      <ToDate state={state} updateState={updateState} />
      <PaymentStatus state={state} updateState={updateState} />
      <CommonSearch state={state} updateState={updateState} />
      <AppointmentsList />
    </StyledWrapper>
  );
}

export default React.memo(SearchAppointments);
