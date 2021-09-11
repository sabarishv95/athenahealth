import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  .payment-status {
    height: 32px;
    width: 150px;
    & > div {
      min-height: 32px;
      & > div {
        height: 28px;
      }
    }
  }
`;
