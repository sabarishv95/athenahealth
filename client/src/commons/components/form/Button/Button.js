import React from "react";
import { StyledButton } from "./Button.styles";

function Button({ width, height, borderColor, background, color, className, label }) {
  return (
    <StyledButton
      width={width}
      height={height}
      borderColor={borderColor}
      background={background}
      color={color}
      className={className ? className : ""}
    >
      {label}
    </StyledButton>
  );
}

export default React.memo(Button);
