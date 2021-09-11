import React from "react";
import { StyledLabel } from "./Label.styles";

function Label({ id, text, width }) {
  return (
    <StyledLabel htmlFor={id} width={width}>
      {text}
    </StyledLabel>
  );
}

export default React.memo(Label);
