import React from "react";
import CommonSearch from "./components/CommonSearch";
import FromDate from "./components/FromDate";
import PaymentStatus from "./components/PaymentStatus";
import ToDate from "./components/ToDate";
import { StyledWrapper } from "./SearchAppointments.styles";

function SearchAppointments() {
  return (
    <StyledWrapper>
      <FromDate />
      <ToDate />
      <PaymentStatus />
      <CommonSearch />
    </StyledWrapper>
  );
}

export default React.memo(SearchAppointments);
