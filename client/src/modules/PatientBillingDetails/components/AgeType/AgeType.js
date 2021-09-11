import React from "react";
import Select from "react-select";
import { Wrapper } from "./AgeType.styles";

function AgeType() {
  return (
    <Wrapper>
      <Select className="age-type" placeholder="Years" />
    </Wrapper>
  );
}

export default React.memo(AgeType);
