import React from "react";
import { StyledInput } from "./Input.styles";

function Input({ width, height, type, id, name, className, placeholder, onChange, value, checked }) {
  return (
    <StyledInput
      id={id}
      type={type}
      height={height}
      width={width}
      name={name}
      className={className ? className : ""}
      placeholder={placeholder ? placeholder : ""}
      onChange={onChange}
      value={value}
      checked={checked}
    />
  );
}

export default React.memo(Input);
