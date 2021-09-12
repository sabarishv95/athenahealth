import React, { useContext, useCallback } from "react";
import Input from "../../../../commons/components/form/Input";
import { Wrapper } from "./Age.styles";
import PaymentDetailsContext from "../../context";
import moment from "moment";

function Age() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const onAgeChange = useCallback(
    (e) => {
      updatePaymentBillingDetailsKey(e.target.id, Number(e.target.value));
      if (paymentDetails.ageType) {
        const date = moment().subtract(Number(e.target.value), paymentDetails.ageType);
        updatePaymentBillingDetailsKey("dob", date.format("MM-DD-YYYY"));
      }
    },
    [updatePaymentBillingDetailsKey, paymentDetails]
  );
  return (
    <Wrapper>
      <Input
        id="age"
        type="number"
        height="34"
        width="75"
        onChange={onAgeChange}
        value={paymentDetails.age || ""}
      />
    </Wrapper>
  );
}

export default React.memo(Age);
