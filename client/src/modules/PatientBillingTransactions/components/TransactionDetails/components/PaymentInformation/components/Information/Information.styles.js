import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  & > div {
    width: 50%;
    margin: 0 0 20px 0;
    border: 1px solid grey;
    border-bottom: 0px;
  }

  & > div > p {
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid grey;c
  }
`;
