import React, { useContext } from "react";
import { Wrapper } from "./PaymentInformation.styles";
import AddTransaction from "./components/AddTransaction";
import Information from "./components/Information";
import PaymentTransactionsContext from "../../../../context";
import { getValue } from "./helpers";

function PaymentInformation() {
  const { appointment } = useContext(PaymentTransactionsContext);
  const totalAmount = getValue(appointment.medicalScanDetails, "scanAmount");
  const discount = getValue(appointment.medicalScanDetails, "discount");
  const paidAmount = getValue(appointment.transactions, "paidAmount");
  const balanceAmount = totalAmount - discount - paidAmount;
  const minAmountToPay =
    appointment.transactions.length === 2 ? balanceAmount : (30 / 100) * totalAmount;

  return (
    <Wrapper>
      <p>Current Billing Status: </p>
      <Information
        appointment={appointment}
        totalAmount={totalAmount}
        discount={discount}
        paidAmount={paidAmount}
        balanceAmount={balanceAmount}
      />
      <AddTransaction minAmountToPay={minAmountToPay} />
    </Wrapper>
  );
}

export default React.memo(PaymentInformation);
