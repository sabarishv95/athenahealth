import React from "react";
import Label from "../../commons/components/form/Label";
import Gender from "./components/Gender";
import PatientName from "./components/PatientName";
import Salutations from "./components/Salutations";
import { StyledHeader, Container, StyledForm, StyledContent } from "./PatientBillingDetails.styles";

function PatientBillingDetails() {
  return (
    <Container>
      <StyledHeader>Patient Details</StyledHeader>
      <StyledForm>
        <StyledContent className="patient-name">
          <Label id="patientName" text="Patient Name" />
          <Salutations />
          <PatientName />
        </StyledContent>
        <StyledContent>
          <p>Gender</p>
          <Gender />
        </StyledContent>
      </StyledForm>
    </Container>
  );
}

export default React.memo(PatientBillingDetails);
