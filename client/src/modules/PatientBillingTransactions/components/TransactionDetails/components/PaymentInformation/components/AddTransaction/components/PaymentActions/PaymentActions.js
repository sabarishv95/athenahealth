import React, { useCallback, useContext } from "react";
import Button from "../../../../../../../../../../commons/components/form/Button";
import PaymentTransactionsContext from "../../../../../../../../context";

function PaymentActions({ payableAmount, minAmountToPay, updateIsValid }) {
  const { setAppointment } = useContext(PaymentTransactionsContext);

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
    </>
  );
}

export default React.memo(PaymentActions);
