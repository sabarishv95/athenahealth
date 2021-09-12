import React, { useContext, useCallback } from "react";
import Input from "../../../../commons/components/form/Input";
import { Wrapper } from "./Age.styles";
import PaymentDetailsContext from "../../context";

function Age() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const onAgeChange = useCallback(
    (e) => {
      updatePaymentBillingDetailsKey(e.target.id, Number(e.target.value));
    },
    [updatePaymentBillingDetailsKey]
  );
  return (
    <Wrapper>
      <Input
        id="age"
        type="number"
        height="34"
        width="75"
        onChange={onAgeChange}
        value={paymentDetails.age ? paymentDetails.age : ""}
      />
    </Wrapper>
  );
}

export default React.memo(Age);
