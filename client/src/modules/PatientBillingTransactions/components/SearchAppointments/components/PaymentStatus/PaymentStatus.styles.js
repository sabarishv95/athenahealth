import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  .payment-status {
    min-height: 32px;
    width: 150px;
    & > div {
      min-height: 32px;
      & > div {
        min-height: 28px;
      }
    }
  }
`;
