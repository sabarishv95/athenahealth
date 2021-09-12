import styled from "styled-components";

export const Wrapper = styled.section`
  width: 60%;
  margin: 20px 0 0 40px;

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

  tbody tr {
    height: 50px;
    background: #fff;

    td {
      text-align: center;
    }
  }

  td,
  th {
    border: 1px solid #ddd;
    font-weight: 400;
  }
`;
