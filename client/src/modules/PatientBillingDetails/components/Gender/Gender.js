import React from "react";
import Input from "../../../../commons/components/form/Input";
import Label from "../../../../commons/components/form/Label";
import { Wrapper } from "./Gender.styles";

function Gender() {
  return (
    <Wrapper>
      <Input type="radio" id="male" height="16" width="24" name="gender" />
      <Label id="male" text="Male" />
      <Input type="radio" id="female" height="16" width="24" name="gender" />
      <Label id="female" text="Female" />
    </Wrapper>
  );
}

export default React.memo(Gender);
