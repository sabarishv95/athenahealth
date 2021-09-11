import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  min-height: calc(100vh - 40px);
`;

export const StyledHeader = styled.header`
  color: #6da2e8;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #6da2e8;
`;

export const StyledForm = styled.form`
  width: 75%;
  display: flex;
`;

export const StyledContent = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  margin-right: 20px;

  p {
    color: #000;
    font-weight: 500;
    margin-right: 10px;  
  }
`;
