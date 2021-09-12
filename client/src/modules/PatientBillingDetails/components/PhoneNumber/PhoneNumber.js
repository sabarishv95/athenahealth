import React, { useContext, useCallback } from "react";
import Input from "../../../../commons/components/form/Input";
import PaymentDetailsContext from "../../context";

function PhoneNumber() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const onPhoneNumberChange = useCallback(
    (e) => {
      updatePaymentBillingDetailsKey(e.target.id, Number(e.target.value));
    },
    [updatePaymentBillingDetailsKey]
  );

  return (
    <Input
      id="phoneNumber"
      type="number"
      width="200"
      height="34"
      onChange={onPhoneNumberChange}
      value={paymentDetails.phoneNumber ? paymentDetails.phoneNumber : ""}
    />
  );
}

export default React.memo(PhoneNumber);
