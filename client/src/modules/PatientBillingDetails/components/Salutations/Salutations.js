import React, { useCallback, useContext } from "react";
import Select from "react-select";
import { Wrapper } from "./Salutations.styles";
import { SALUTATIONS } from "../../constants";
import PaymentDetailsContext from "../../context";

function Salutations() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const onSalutationsChange = useCallback(
    (e) => {
      const salutation = SALUTATIONS.find((obj) => obj.name === "mister");
      updatePaymentBillingDetailsKey("salutation", e.label);
      updatePaymentBillingDetailsKey("gender", e.name === salutation.name ? "Male" : "Female");
    },
    [updatePaymentBillingDetailsKey]
  );

  return (
    <Wrapper>
      <Select
        className="salutations"
        placeholder="Mr"
        options={SALUTATIONS}
        inputId="salutations"
        name="salutations"
        getOptionLabel={(option) => `${option.label}`}
        getOptionValue={(option) => `${option.id}`}
        value={
          paymentDetails.salutation
            ? SALUTATIONS.find((obj) => obj.label === paymentDetails.salutation)
            : ""
        }
        onChange={onSalutationsChange}
        isSearchable={false}
      />
    </Wrapper>
  );
}

export default React.memo(Salutations);
