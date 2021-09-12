import React, { useState } from "react";
import AddDiscount from "./components/AddDiscount";
import ScanAmount from "./components/ScanAmount";
import SearchBilling from "./components/SearchBilling";
import { getAmount } from "./helpers";
import { StyledWrapper } from "./ScanList.styles";

function ScanList() {
  const [medicalBilling, updateMedicalBilling] = useState("");
  const [discount, updateDiscount] = useState(null);

  const amount = getAmount(medicalBilling);

  return (
    <StyledWrapper>
      <SearchBilling medicalBilling={medicalBilling} onStateChange={updateMedicalBilling} />
      <ScanAmount amount={amount} />
      <AddDiscount discount={discount} onStateChange={updateDiscount} />
    </StyledWrapper>
  );
}

export default React.memo(ScanList);
