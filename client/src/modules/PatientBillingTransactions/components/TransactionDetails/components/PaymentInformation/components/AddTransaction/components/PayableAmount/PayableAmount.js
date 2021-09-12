import React, { useCallback } from "react";
import Input from "../../../../../../../../../../commons/components/form/Input";
import Label from "../../../../../../../../../../commons/components/form/Label";

function PayableAmount({ updatePayableAmount, payableAmount, isValid, minAmountToPay }) {
  const onPayableAmountChange = useCallback(
    (e) => {
      updatePayableAmount(e.target.value);
    },
    [updatePayableAmount]
  );
  return (
    <>
      <Label id="payableAmount" text="Payable Amount: " width="130" />
      <Input
        id="payableAmount"
        type="number"
        height="34"
        width="200"
        onChange={onPayableAmountChange}
        value={payableAmount || ""}
      />
      {isValid === false && <p className="error-msg">Minimum Amount: {minAmountToPay}</p>}
    </>
  );
}

export default React.memo(PayableAmount);
