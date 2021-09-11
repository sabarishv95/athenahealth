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
import AgeType from "./components/AgeType";
import PhoneNumber from "./components/PhoneNumber";
import Address from "./components/Address";

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
            <Label id="age" text="Age" width="75" />
            <Age />
            <AgeType />
          </StyledContent>
          <StyledContent>
            <Label id="phNo" text="Phone No" width="75" />
            <PhoneNumber />
          </StyledContent>
        </StyledSection>
        <StyledSection width="100%">
          <p className="address">Address</p>
          <Address />
        </StyledSection>
      </StyledForm>
    </Container>
  );
}

export default React.memo(PatientBillingDetails);
