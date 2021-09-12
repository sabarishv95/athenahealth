import React, { useContext, useCallback } from "react";
import Select from "react-select";
import { COUNTRY } from "../../../../constants";
import PaymentDetailsContext from "../../../../context";

function Country({ updateAddress }) {
  const { paymentDetails } = useContext(PaymentDetailsContext);

  const onCountryChange = useCallback(
    (e) => {
      updateAddress("country", e.label);
    },
    [updateAddress]
  );
  return (
    <Select
      className="country"
      placeholder="Select Country"
      options={COUNTRY}
      inputId="country"
      name="country"
      getOptionLabel={(option) => `${option.label}`}
      getOptionValue={(option) => `${option.id}`}
      value={
        paymentDetails.address.country ? COUNTRY.find((obj) => obj.label === paymentDetails.address.country) : ""
      }
      onChange={onCountryChange}
    />
  );
}

export default React.memo(Country);
