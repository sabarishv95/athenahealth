import React, { useCallback, useContext } from "react";
import Button from "../../../../../../../../../../commons/components/form/Button";
import PaymentTransactionsContext from "../../../../../../../../context";
import Api from "../../../../../../../../../../API";
import moment from "moment";

function PaymentActions({
  payableAmount,
  minAmountToPay,
  updateIsValid,
  paymentMode,
  balanceAmount,
  updateIsAmountExceeded,
}) {
  const { setAppointment, appointment } = useContext(PaymentTransactionsContext);

  const onCancel = useCallback(() => {
    setAppointment();
  }, [setAppointment]);

  const onSave = useCallback(() => {
    const isValid = payableAmount >= minAmountToPay;
    const isAmountExceeded = payableAmount > balanceAmount;
    const api = new Api();
    if (isValid && !isAmountExceeded) {
      const query = `mutation addTransaction($appointment: ID, $transaction: TransactionInput!, $transactions: [ID]) {
        addTransaction(appointment: $appointment, transaction: $transaction, transactions: $transactions) {
          _id
          patientName
          gender
          age
          appointmentDate
          status
          medicalScanDetails {
            scanName
            scanAmount
            discount
            totalAmount
          }
          transactions {
            _id
            date
            paidAmount
            paymentMode
          }
        }
      }`;
      api
        .graphqlRequest(query, {
          appointment: appointment._id,
          transactions: appointment.transactions.map((obj) => obj._id),
          transaction: {
            date: moment().format("MM-DD-YYYY"),
            paidAmount: Number(payableAmount),
            paymentMode,
          },
        })
        .then((response) => {
          setAppointment(response.data.data.addTransaction);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    updateIsValid(isValid);
    updateIsAmountExceeded(isAmountExceeded);
  }, [
    updateIsValid,
    minAmountToPay,
    payableAmount,
    appointment,
    paymentMode,
    setAppointment,
    updateIsAmountExceeded,
    balanceAmount,
  ]);

  const isSaveDisabled = appointment.transactions.length === 3 || !paymentMode || !payableAmount;

  return (
    <>
      <Button
        className={`${isSaveDisabled ? "disabled" : ""} saveBtn mt20`}
        label="Save"
        height="38"
        width="80"
        onClick={onSave}
        disabled={isSaveDisabled}
      />
      <Button
        className="cancelBtn mt20"
        label="Cancel"
        height="38"
        width="80"
        onClick={onCancel}
        background="red"
        color="#fff"
      />
    </>
  );
}

export default React.memo(PaymentActions);
