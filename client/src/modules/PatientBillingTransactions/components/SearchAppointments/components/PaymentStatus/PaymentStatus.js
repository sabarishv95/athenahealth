import React from "react";
import Select from "react-select";
import Label from "../../../../../../commons/components/form/Label";
import { Wrapper } from "./PaymentStatus.styles";

function PaymentStatus() {
  return (
    <Wrapper>
      <Label id="paymentStatus" text="Status" />
      <Select id="paymentStatus" className="payment-status" placeholder="Fully Paid" />
    </Wrapper>
  );
}

export default React.memo(PaymentStatus);
