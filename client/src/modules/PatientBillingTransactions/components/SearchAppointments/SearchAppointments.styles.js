import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  flex-flow: wrap;

  .date-wrapper {
    height: 36px;
    margin-right: 20px;
    & .form-control {
      height: 34px;
    }
  }

  #commonSearch {
    &:focus {
      border-radius: 20px;
      outline: none;
      border: 2px solid #2260c5;
    }
    border-radius: 20px;
  }
  .searchBtn {
    margin-left: 10px;
  }
`;
