import React from "react";
import PaymentInformation from "./components/PaymentInformation";
import { Wrapper } from "./TransactionDetails.styles";

function TransactionDetails() {
  return (
    <Wrapper>
      <PaymentInformation />
    </Wrapper>
  );
}

export default React.memo(TransactionDetails);
