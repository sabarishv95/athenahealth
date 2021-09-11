import React from "react";
import ScanDetailsTable from "./components/ScanDetailsTable";
import ScanList from "./components/ScanList";
import { StyledWrapper, StyledTitle } from "./MedicalScanDetails.styles";

function MedicalScanDetails() {
  return (
    <StyledWrapper>
      <StyledTitle>Medical Scan Details</StyledTitle>
      <ScanList />
      <ScanDetailsTable />
    </StyledWrapper>
  );
}

export default React.memo(MedicalScanDetails);
