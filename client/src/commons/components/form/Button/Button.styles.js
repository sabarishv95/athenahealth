import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => `${width ? width : "64"}px`};
  height: ${({ height }) => `${height ? height : "32"}px`};
  border-radius: 4px;
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "#cccccc")};
  border-width: 1px;
  border-style: solid;
  background: ${({ background }) => (background ? background : "#fff")};
  color: ${({ color }) => (color ? color : "#000")};
  cursor: pointer;
`;
