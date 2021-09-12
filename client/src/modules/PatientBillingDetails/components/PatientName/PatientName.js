import React, { useCallback, useContext } from "react";
import Input from "../../../../commons/components/form/Input";
import PaymentDetailsContext from "../../context";
import { Wrapper } from "./PatientName.styles";

function PatientName() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const onPatientNameChange = useCallback(
    (e) => {
      updatePaymentBillingDetailsKey(e.target.id, e.target.value);
    },
    [updatePaymentBillingDetailsKey]
  );

  return (
    <Wrapper>
      <Input
        id="patientName"
        type="text"
        height="34"
        width="250"
        onChange={onPatientNameChange}
        value={paymentDetails.patientName}
      />
    </Wrapper>
  );
}

export default React.memo(PatientName);
