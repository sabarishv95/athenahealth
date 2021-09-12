import React from "react";
import Label from "../../../../../../../../../../commons/components/form/Label";
import Select from "react-select";

function PaymentMode() {
  return (
    <>
      <Label id="paymentMode" text="Payment Mode: " width="130" />
      <Select id="paymentMode" />
    </>
  );
}

export default React.memo(PaymentMode);
