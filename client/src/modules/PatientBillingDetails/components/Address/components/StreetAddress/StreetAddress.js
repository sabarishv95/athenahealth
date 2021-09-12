import React, { useContext, useCallback } from "react";
import Input from "../../../../../../commons/components/form/Input";
import { Wrapper } from "./StreetAddress.styles";
import PaymentDetailsContext from "../../../../context";

function StreetAddress({ updateAddress }) {
  const { paymentDetails } = useContext(PaymentDetailsContext);

  const onStreetAddressChange = useCallback(
    (e) => {
      updateAddress(e.target.id, e.target.value);
    },
    [updateAddress]
  );

  return (
    <Wrapper>
      <Input
        id="streetAddress"
        className="street-address"
        type="text"
        height="34"
        placeholder="Street Address"
        onChange={onStreetAddressChange}
        value={paymentDetails.address.streetAddress}
      />
      <Input
        id="streetAddress1"
        className="street-address"
        type="text"
        height="34"
        placeholder="Street Address 1"
        onChange={onStreetAddressChange}
        value={paymentDetails.address.streetAddress1}
      />
    </Wrapper>
  );
}

export default React.memo(StreetAddress);
