import React from "react";
import AddDiscount from "./components/AddDiscount";
import ScanAmount from "./components/ScanAmount";
import SearchBilling from "./components/SearchBilling";
import { StyledWrapper } from "./ScanList.styles";

function ScanList() {
  return (
    <StyledWrapper>
      <SearchBilling />
      <ScanAmount amount={250} />
      <AddDiscount />
    </StyledWrapper>
  );
}

export default React.memo(ScanList);
