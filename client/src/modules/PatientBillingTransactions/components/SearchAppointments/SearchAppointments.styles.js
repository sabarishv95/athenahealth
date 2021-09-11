import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  flex-flow: wrap;

  .date-wrapper {
    height: 32px;
    margin-right: 20px;
    & .form-control {
      height: 28px;
    }
  }

  #commonSearch {
      border-radius: 20px;
  }
  .searchBtn {
    margin-left: 10px;
  }
`;
