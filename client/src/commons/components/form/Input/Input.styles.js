import styled from "styled-components";

export const StyledInput = styled.input`
  height: ${({ height }) => `${height ? height : "38"}px`};
  background-color: hsl(0, 0%, 100%);
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 80%);
  font-size: 16px;
  width: 250px;
`;
