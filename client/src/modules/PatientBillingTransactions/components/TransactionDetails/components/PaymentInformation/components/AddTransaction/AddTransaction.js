import React, { useCallback, useContext, useState } from "react";
import Select from "react-select";
import Button from "../../../../../../../../commons/components/form/Button";
import Input from "../../../../../../../../commons/components/form/Input";
import Label from "../../../../../../../../commons/components/form/Label";
import PaymentTransactionsContext from "../../../../../../context";

function AddTransaction({ minAmountToPay }) {
  const [payableAmount, updatePayableAmount] = useState(null);
  const { setAppointment } = useContext(PaymentTransactionsContext);
  const [isValid, updateIsValid] = useState(null);

  const onPayableAmountChange = useCallback(
    (e) => {
      updatePayableAmount(e.target.value);
    },
    [updatePayableAmount]
  );

  const onCancel = useCallback(() => {
    setAppointment();
  }, [setAppointment]);

  const onSave = useCallback(() => {
    const isValid = payableAmount > minAmountToPay;
    if (isValid) {
    }
    updateIsValid(isValid);
  }, [updateIsValid, minAmountToPay, payableAmount]);
  return (
    <>
      <div>
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
      </div>
      <div className="flex align-center mt20">
        <Label id="paymentMode" text="Payment Mode: " width="130" />
        <Select id="paymentMode" />
      </div>
      <div className="flex align-self-center mt20">
        <Button className="saveBtn mt20" label="Save" height="38" width="80" onClick={onSave} />
        <Button
          className="cancelBtn mt20"
          label="Cancel"
          height="38"
          width="80"
          onClick={onCancel}
          background="red"
          color="#fff"
        />
      </div>
    </>
  );
}

export default React.memo(AddTransaction);
