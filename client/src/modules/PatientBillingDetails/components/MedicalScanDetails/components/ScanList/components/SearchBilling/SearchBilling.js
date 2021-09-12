import React, { useCallback } from "react";
import Select from "react-select";
import { MEDICAL_BILLING_MASTER } from "../../../../../../constants";

function SearchBilling({ medicalBilling, onStateChange, updateIsValid }) {
  const onChange = useCallback(
    (e) => {
      onStateChange(e.medicalBilling);
      updateIsValid(null)
    },
    [onStateChange, updateIsValid]
  );

  return (
    <Select
      className="search-billing"
      placeholder="Auto Complete Search"
      options={MEDICAL_BILLING_MASTER}
      inputId="medicalBillingMaster"
      name="medicalBillingMaster"
      getOptionLabel={(option) => `${option.medicalBilling}`}
      getOptionValue={(option) => `${option.id}`}
      value={
        medicalBilling
          ? MEDICAL_BILLING_MASTER.find((obj) => obj.medicalBilling === medicalBilling)
          : ""
      }
      onChange={onChange}
      isSearchable={true}
    />
  );
}

export default React.memo(SearchBilling);
