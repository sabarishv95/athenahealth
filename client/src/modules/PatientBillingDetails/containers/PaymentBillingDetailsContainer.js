import React from "react";
import { connect } from "react-redux";
import PaymentBillingDetails from "../index";
import { updatePaymentBillingDetails, updatePaymentBillingDetailsKey } from "../store/actions";

const mapDispatchToProps = (dispatch) => ({
  updatePaymentBillingDetails: (data) => dispatch(updatePaymentBillingDetails(data)),
  updatePaymentBillingDetailsKey: (key, value) =>
    dispatch(updatePaymentBillingDetailsKey(key, value)),
});

const mapStateToProps = (state) => ({
  paymentBillingDetails: state.paymentBillingDetails,
});

function PaymentBillingDetailsContainer(props) {
  return <PaymentBillingDetails {...props} />;
}

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(PaymentBillingDetailsContainer)
);
