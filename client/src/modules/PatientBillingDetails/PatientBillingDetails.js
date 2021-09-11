import React from "react";
import Label from "../../commons/components/form/Label";
import PatientName from "./components/PatientName";
import Salutations from "./components/Salutations";
import { StyledHeader, Container, StyledForm, StyledName } from "./PatientBillingDetails.styles";

function PatientBillingDetails() {
  return (
    <Container>
      <StyledHeader>Patient Details</StyledHeader>
      <StyledForm>
        <StyledName className="patient-name">
          <Label id="patientName" text="Patient Name" />
          <Salutations />
          <PatientName />
        </StyledName>
      </StyledForm>
    </Container>
  );
}

export default React.memo(PatientBillingDetails);
