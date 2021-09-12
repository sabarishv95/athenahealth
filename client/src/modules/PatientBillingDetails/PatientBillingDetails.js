import React, { useCallback, useContext, useState } from "react";
import Label from "../../commons/components/form/Label";
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
import MedicalScanDetails from "./components/MedicalScanDetails";
import DOB from "./components/DOB";
import AppointmentDate from "./components/AppointmentDate";
import Button from "../../commons/components/form/Button";
import { validateForm } from "./helpers";
import PaymentDetailsContext from "./context";
import Api from "../../API";

function PatientBillingDetails() {
  const { paymentDetails } = useContext(PaymentDetailsContext);
  const [isValid, updateIsValid] = useState(null);

  const onSave = useCallback(() => {
    const isValid = validateForm(paymentDetails);
    const api = new Api();
    if (isValid) {
      const mutation = `mutation createAppointment($appointment: AppointmentInput!) {
        createAppointment(appointment: $appointment) {
          _id
          salutation
          patientName
          gender
          dob
          age
          ageType
          appointmentDate
          phoneNumber
          address
          medicalScanDetails {
            _id
            scanName
            scanAmount
            discount
            totalAmount
          }
        }
      }`;
      api.graphqlRequest(mutation, {
        appointment: {
          ...paymentDetails,
          address: JSON.stringify(paymentDetails.address),
          medicalScanDetails: paymentDetails.medicalScanDetails.map((obj) => {
            return {
              scanName: obj.scanName,
              scanAmount: obj.scanAmount,
              discount: obj.discount,
              totalAmount: obj.totalAmount,
            };
          }),
        },
      });
    }
    updateIsValid(isValid);
  }, [paymentDetails]);

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
            <DOB />
          </StyledContent>
          <StyledContent>
            <Label id="appointmentDate" text="Appointment Date" width="100" />
            <AppointmentDate />
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
            <Label id="phoneNumber" text="Phone No" width="75" />
            <PhoneNumber />
          </StyledContent>
        </StyledSection>
        <StyledSection width="100%">
          <p className="address">Address</p>
          <Address />
        </StyledSection>
      </StyledForm>
      <MedicalScanDetails />
      <Button className={`saveBtn`} label="Save" height="38" width="80" onClick={onSave} />
      {isValid === false && <p className="error-msg">Please enter all fields</p>}
    </Container>
  );
}

export default React.memo(PatientBillingDetails);
