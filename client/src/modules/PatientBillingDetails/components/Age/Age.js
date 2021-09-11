import React from "react";
import Input from "../../../../commons/components/form/Input";
import { Wrapper } from "./Age.styles";

function Age() {
  return (
    <Wrapper>
      <Input id="age" type="number" height="34" width="75" />
    </Wrapper>
  );
}

export default React.memo(Age);
