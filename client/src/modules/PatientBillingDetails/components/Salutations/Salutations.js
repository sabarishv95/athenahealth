import React from "react";
import Select from "react-select";
import { Wrapper } from "./Salutations.styles";

function Salutations() {
  return (
    <Wrapper>
      <Select className="salutations" placeholder="Mr" />
    </Wrapper>
  );
}

export default React.memo(Salutations);
