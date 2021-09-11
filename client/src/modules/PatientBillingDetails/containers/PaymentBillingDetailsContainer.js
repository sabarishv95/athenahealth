import React from "react";
import { connect } from "react-redux";
import PaymentBillingDetails from "../index";
import { updatePaymentBillingDetails, updatePaymentBillingDetailsKey } from "../store/actions";
import PaymentDetailsContext from "../context/PaymentDetailsContext";

const mapDispatchToProps = (dispatch) => ({
  updatePaymentBillingDetails: (data) => dispatch(updatePaymentBillingDetails(data)),
  updatePaymentBillingDetailsKey: (key, value) =>
    dispatch(updatePaymentBillingDetailsKey(key, value)),
});

const mapStateToProps = (state) => ({
    paymentDetails: state.paymentBillingDetails.paymentDetails,
});

function PaymentBillingDetailsContainer(props) {
  return (
    <PaymentDetailsContext.Provider
      value={{
        paymentDetails: props.paymentDetails,
        updatePaymentBillingDetails: props.updatePaymentBillingDetails,
        updatePaymentBillingDetailsKey: props.updatePaymentBillingDetailsKey,
      }}
    >
      <PaymentBillingDetails />
    </PaymentDetailsContext.Provider>
  );
}

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(PaymentBillingDetailsContainer)
);
