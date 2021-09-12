import React, { useCallback, useContext } from "react";
import Input from "../../../../../../commons/components/form/Input";
import PaymentDetailsContext from "../../../../context";

function State({ updateAddress }) {
  const { paymentDetails } = useContext(PaymentDetailsContext);

  const onStateChange = useCallback(
    (e) => {
      updateAddress(e.target.id, e.target.value);
    },
    [updateAddress]
  );
  return (
    <Input
      id="state"
      type="text"
      placeholder="State / Province"
      width="322"
      height="34"
      onChange={onStateChange}
      value={paymentDetails.address.state}
    />
  );
}

export default React.memo(State);
