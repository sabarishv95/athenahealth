import React, { useState, useCallback } from "react";
import AddDiscount from "./components/AddDiscount";
import ScanAmount from "./components/ScanAmount";
import SearchBilling from "./components/SearchBilling";
import { getAmount, validateDiscount } from "./helpers";
import { StyledWrapper } from "./ScanList.styles";
import Button from "../../../../../../commons/components/form/Button";

function ScanList() {
  const [medicalBilling, updateMedicalBilling] = useState("");
  const [discount, updateDiscount] = useState(null);
  const [isValid, updateIsValid] = useState(null);

  const amount = getAmount(medicalBilling);

  const onAddClick = useCallback(() => {
    updateIsValid(validateDiscount(medicalBilling, discount));
  }, [updateIsValid, discount, medicalBilling]);

  return (
    <StyledWrapper>
      <SearchBilling
        medicalBilling={medicalBilling}
        onStateChange={updateMedicalBilling}
        updateIsValid={updateIsValid}
      />
      <ScanAmount amount={amount} />
      <AddDiscount
        discount={discount}
        onStateChange={updateDiscount}
        updateIsValid={updateIsValid}
      />
      <Button className="addBtn" label="Add" height="38" width="80" onClick={onAddClick} />
      {isValid === false && <p className="error-msg">Discount Exceeds max discount</p>}
    </StyledWrapper>
  );
}

export default React.memo(ScanList);
