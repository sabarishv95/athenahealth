import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  min-height: calc(100vh - 40px);
  background: #ebeef0;
  display: flex;
  flex-direction: column;

  .saveBtn, .error-msg  {
    margin-top: 20px;
    align-self: center;
  }
`;

export const StyledHeader = styled.h5`
  color: #6da2e8;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid #6da2e8;
  margin: 0;
`;

export const StyledForm = styled.form`
  width: 75%;
  display: flex;
  flex-flow: wrap;
`;

export const StyledContent = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  margin-right: 20px;
  margin-top: 20px;

  p {
    color: #000;
    font-weight: 500;
    margin-right: 10px;
    width: 75px;
  }
`;

export const StyledSection = styled.section`
  display: inline-block;
  margin-bottom: 20px;
  width: ${({ width }) => `${width}`};

  .address {
    color: #000;
    font-weight: 500;
    margin-right: 10px;
    width: 100px;
    display: inline-block;
  }
`;
