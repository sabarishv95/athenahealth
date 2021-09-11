import React from "react";
import { StyledInput } from "./Input.styles";

function Input({ width, height, type, id, name, className }) {
  return (
    <StyledInput
      id={id}
      type={type}
      height={height}
      width={width}
      name={name}
      className={className ? className : ""}
    />
  );
}

export default React.memo(Input);
