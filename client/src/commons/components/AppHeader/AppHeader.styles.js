import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  height: 50px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid rgb(218, 223, 227);
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 4px 0 rgb(24 50 71 / 8%);

  a {
    text-decoration: none;
    color: #000;
    margin-right: 10px;

    &.active {
        color: #6da2e8;
    }
  }
`;
