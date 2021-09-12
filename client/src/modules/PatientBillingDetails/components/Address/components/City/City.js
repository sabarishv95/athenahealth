import React, { useContext, useCallback } from "react";
import Input from "../../../../../../commons/components/form/Input";
import PaymentDetailsContext from "../../../../context";

function City({ updateAddress }) {
  const { paymentDetails } = useContext(PaymentDetailsContext);

  const onCityChange = useCallback(
    (e) => {
      updateAddress(e.target.id, e.target.value);
    },
    [updateAddress]
  );

  return (
    <Input
      id="city"
      type="text"
      placeholder="City"
      width="322"
      height="34"
      onChange={onCityChange}
      value={paymentDetails.address.city}
    />
  );
}

export default React.memo(City);
