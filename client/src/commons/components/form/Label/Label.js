import React from "react";
import { StyledLabel } from "./Label.styles";

function Label({ id, text }) {
  return <StyledLabel htmlFor={id}>{text}</StyledLabel>;
}

export default React.memo(Label);
