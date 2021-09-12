import React, { useContext } from "react";
import SearchAppointments from "./components/SearchAppointments/SearchAppointments";
import { StyledHeader, Container } from "./PatientBillingTransactions.styles";
import PaymentTransactionsContext from "./context";
import { isEmpty } from "lodash";
import TransactionDetails from "./components/TransactionDetails";

function PatientBillingTransactions() {
  const { appointment } = useContext(PaymentTransactionsContext);

  return (
    <Container>
      {isEmpty(appointment) ? (
        <>
          <StyledHeader>View Appointments</StyledHeader>
          <SearchAppointments />
        </>
      ) : (
        <>
          <StyledHeader>Patient Billing</StyledHeader>
          <TransactionDetails />
        </>
      )}
    </Container>
  );
}

export default React.memo(PatientBillingTransactions);
