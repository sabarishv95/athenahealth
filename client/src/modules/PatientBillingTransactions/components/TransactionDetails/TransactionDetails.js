import React from "react";
import PaymentInformation from "./components/PaymentInformation";
import TransactionList from "./components/TransactionList";
import { Wrapper } from "./TransactionDetails.styles";

function TransactionDetails() {
  return (
    <Wrapper>
      <PaymentInformation />
      <TransactionList />
    </Wrapper>
  );
}

export default React.memo(TransactionDetails);
