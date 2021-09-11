import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./AppHeader.styles";

function AppHeader() {
  return (
    <StyledHeader>
      <NavLink exact to="/">Patient Billing</NavLink>
      <NavLink to="/patientTransactions">Patient Transactions</NavLink>
    </StyledHeader>
  );
}

export default React.memo(AppHeader);
