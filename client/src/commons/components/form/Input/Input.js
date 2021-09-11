import React from "react";
import { StyledInput } from "./Input.styles";

function Input({ width, height, type, id, name, className, placeholder }) {
  return (
    <StyledInput
      id={id}
      type={type}
      height={height}
      width={width}
      name={name}
      className={className ? className : ""}
      placeholder={placeholder ? placeholder : ""}
    />
  );
}

export default React.memo(Input);
