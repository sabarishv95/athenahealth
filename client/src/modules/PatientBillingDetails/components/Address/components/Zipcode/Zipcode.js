import React, { useContext, useCallback } from "react";
import Input from "../../../../../../commons/components/form/Input";
import PaymentDetailsContext from "../../../../context";

function Zipcode({ updateAddress }) {
  const { paymentDetails } = useContext(PaymentDetailsContext);

  const onZipCodeChange = useCallback(
    (e) => {
      updateAddress(e.target.id, e.target.value);
    },
    [updateAddress]
  );
  return (
    <Input
      id="zipCode"
      type="number"
      placeholder="Zip / Postal Code"
      width="322"
      height="34"
      onChange={onZipCodeChange}
      value={paymentDetails.address.zipCode}
    />
  );
}

export default React.memo(Zipcode);
