import React from "react";
import { Wrapper } from "./Information.styles";

function Information({ appointment, totalAmount, discount, paidAmount, balanceAmount }) {
  return (
    <Wrapper>
      <div>
        <p>Patient Name</p>
        <p>Age/Gender</p>
        <p>Total Amount</p>
        <p>Discount</p>
        <p>Paid Amount</p>
        <p>Balance</p>
      </div>
      <div>
        <p>{appointment.patientName}</p>
        <p>{`${appointment.age} / ${appointment.gender}`}</p>
        <p>{totalAmount}</p>
        <p>{discount}</p>
        <p>{paidAmount}</p>
        <p>{balanceAmount}</p>
      </div>
    </Wrapper>
  );
}

export default React.memo(Information);
