import React from "react";
import SearchAppointments from "./components/SearchAppointments/SearchAppointments";
import { StyledHeader, Container } from "./PatientBillingTransactions.styles";

function PatientBillingTransactions() {
  return (
    <Container>
      <StyledHeader>View Appointments</StyledHeader>
      <SearchAppointments />
    </Container>
  );
}

export default React.memo(PatientBillingTransactions);
