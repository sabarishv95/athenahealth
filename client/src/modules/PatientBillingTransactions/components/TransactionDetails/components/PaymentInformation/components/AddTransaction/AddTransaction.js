import React, { useState } from "react";
import PayableAmount from "./components/PayableAmount";
import PaymentActions from "./components/PaymentActions";
import PaymentMode from "./components/PaymentMode";

function AddTransaction({ minAmountToPay }) {
  const [payableAmount, updatePayableAmount] = useState(null);
  const [paymentMode, updatePaymentMode] = useState("");
  const [isValid, updateIsValid] = useState(null);

  return (
    <>
      <div>
        <PayableAmount
          isValid={isValid}
          payableAmount={payableAmount}
          updatePayableAmount={updatePayableAmount}
          minAmountToPay={minAmountToPay}
        />
      </div>
      <div className="flex align-center mt20">
        <PaymentMode paymentMode={paymentMode} updatePaymentMode={updatePaymentMode} />
      </div>
      <div className="flex align-self-center mt20">
        <PaymentActions
          updateIsValid={updateIsValid}
          payableAmount={payableAmount}
          paymentMode={paymentMode}
          minAmountToPay={minAmountToPay}
        />
      </div>
    </>
  );
}

export default React.memo(AddTransaction);
