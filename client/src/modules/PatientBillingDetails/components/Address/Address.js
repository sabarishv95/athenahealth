import React, { useContext, useCallback } from "react";
import { Wrapper } from "./Address.styles";
import City from "./components/City";
import Country from "./components/Country";
import State from "./components/State";
import StreetAddress from "./components/StreetAddress";
import Zipcode from "./components/Zipcode";
import PaymentDetailsContext from "../../context";

function Address() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const updateAddress = useCallback(
    (key, value) => {
      const address = paymentDetails.address;
      address[key] = value;
      updatePaymentBillingDetailsKey("address", address);
    },
    [updatePaymentBillingDetailsKey, paymentDetails]
  );

  return (
    <Wrapper>
      <StreetAddress updateAddress={updateAddress} />
      <div>
        <City updateAddress={updateAddress} />
        <State updateAddress={updateAddress} />
      </div>
      <div>
        <Zipcode updateAddress={updateAddress} />
        <Country updateAddress={updateAddress} />
      </div>
    </Wrapper>
  );
}

export default React.memo(Address);
