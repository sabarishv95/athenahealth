import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;

  table,
  thead,
  tbody {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    height: 50px;
    background: #5996e5;
    color: white;
  }

  td,
  th {
    border: 1px solid #ddd;
    font-weight: 400;
  }
`;

export const StyledTitle = styled.h5`
  color: #6da2e8;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid #6da2e8;
  margin: 0 0 20px 0;
`;
