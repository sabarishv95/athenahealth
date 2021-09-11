import React from "react";
import { StyledHeader, Container } from "./PatientBillingTransactions.styles";

function PatientBillingTransactions() {
  return (
    <Container>
      <StyledHeader>Patient Transactions</StyledHeader>
    </Container>
  );
}

export default React.memo(PatientBillingTransactions);
