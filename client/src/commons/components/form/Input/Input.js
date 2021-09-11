import React from "react";
import { StyledInput } from "./Input.styles";

function Input({ height, type, id }) {
  return <StyledInput id={id} type={type} height={height} />;
}

export default React.memo(Input);
