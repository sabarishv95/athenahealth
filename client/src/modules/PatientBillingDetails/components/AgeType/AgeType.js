import React, { useCallback, useContext } from "react";
import Select from "react-select";
import { Wrapper } from "./AgeType.styles";
import { AGE_TYPE } from "../../constants";
import PaymentDetailsContext from "../../context";

function AgeType() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const onAgeTypeChange = useCallback(
    (e) => {
      updatePaymentBillingDetailsKey("ageType", e.label);
    },
    [updatePaymentBillingDetailsKey]
  );

  return (
    <Wrapper>
      <Select
        className="age-type"
        placeholder="Years"
        options={AGE_TYPE}
        inputId="ageType"
        name="ageType"
        getOptionLabel={(option) => `${option.label}`}
        getOptionValue={(option) => `${option.id}`}
        value={
          paymentDetails.ageType ? AGE_TYPE.find((obj) => obj.label === paymentDetails.ageType) : ""
        }
        onChange={onAgeTypeChange}
        isSearchable={false}
      />
    </Wrapper>
  );
}

export default React.memo(AgeType);
