import React from "react";
import Label from "../../commons/components/form/Label";
import DatePicker from "../../commons/components/form/DatePicker";
import Gender from "./components/Gender";
import PatientName from "./components/PatientName";
import Salutations from "./components/Salutations";
import {
  StyledHeader,
  Container,
  StyledForm,
  StyledContent,
  StyledSection,
} from "./PatientBillingDetails.styles";
import Age from "./components/Age";

function PatientBillingDetails() {
  return (
    <Container>
      <StyledHeader>Patient Details</StyledHeader>
      <StyledForm>
        <StyledSection>
          <StyledContent className="patient-name">
            <Label id="patientName" text="Patient Name" width="100" />
            <Salutations />
            <PatientName />
          </StyledContent>
          <StyledContent>
            <Label id="DOB" text="DOB" width="100" />
            <DatePicker id="DOB" />
          </StyledContent>
          <StyledContent>
            <Label id="appointmentDate" text="Appointment Date" width="100" />
            <DatePicker id="appointmentDate" />
          </StyledContent>
        </StyledSection>
        <StyledSection>
          <StyledContent>
            <p>Gender</p>
            <Gender />
          </StyledContent>
          <StyledContent>
            <Label id="age" text="Age" />
            <Age />
          </StyledContent>
        </StyledSection>
      </StyledForm>
    </Container>
  );
}

export default React.memo(PatientBillingDetails);
