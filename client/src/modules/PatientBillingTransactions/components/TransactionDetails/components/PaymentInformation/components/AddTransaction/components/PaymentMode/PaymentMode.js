import React, { useCallback } from "react";
import Label from "../../../../../../../../../../commons/components/form/Label";
import Select from "react-select";
import { PAYMENT_MODE } from "../../../../../../constants";

function PaymentMode({ paymentMode, updatePaymentMode }) {
  const onChange = useCallback(
    (e) => {
      updatePaymentMode(e.label);
    },
    [updatePaymentMode]
  );

  return (
    <>
      <Label id="paymentMode" text="Payment Mode: " width="130" />
      <Select
        id="paymentMode"
        placeholder="CASH"
        options={PAYMENT_MODE}
        inputId="paymentMode"
        name="paymentMode"
        getOptionLabel={(option) => `${option.label}`}
        getOptionValue={(option) => `${option.id}`}
        value={paymentMode ? PAYMENT_MODE.find((obj) => obj.label === paymentMode) : ""}
        onChange={onChange}
        isSearchable={false}
      />
    </>
  );
}

export default React.memo(PaymentMode);
