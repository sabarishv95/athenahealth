import React from "react";
import { StyledButton } from "./Button.styles";

function Button({
  width,
  height,
  borderColor,
  background,
  color,
  className,
  label,
  onClick,
  disabled,
}) {
  return (
    <StyledButton
      width={width}
      height={height}
      borderColor={borderColor}
      background={background}
      color={color}
      className={className ? className : ""}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
}

export default React.memo(Button);
