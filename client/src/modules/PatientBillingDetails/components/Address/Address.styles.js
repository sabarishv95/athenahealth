import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  width: calc(100% - 140px);
  flex-direction: column;

  #city,
  #zipcode,
  #state {
    margin-right: 10px;
    margin-bottom: 20px;
    width: 44% !important;
  }

  .country {
    display: inline-block;
    width: 45%;
  }
`;
