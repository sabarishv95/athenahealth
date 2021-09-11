import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;

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
