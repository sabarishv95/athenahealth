import React from "react";
import Input from "../../../../commons/components/form/Input/Input";
import { Wrapper } from "./PatientName.styles";

function PatientName() {
  return (
    <Wrapper>
      <Input id="patientName" type="text" height="34" />
    </Wrapper>
  );
}

export default React.memo(PatientName);
