import React from "react";
import { connect } from "react-redux";
import PaymentBillingDetails from "../index";
import {
  updatePaymentBillingDetails,
  updatePaymentBillingDetailsKey,
  setCurrentAppointments,
} from "../store/actions";
import PaymentDetailsContext from "../context";

const mapDispatchToProps = (dispatch) => ({
  updatePaymentBillingDetails: (data) => dispatch(updatePaymentBillingDetails(data)),
  updatePaymentBillingDetailsKey: (key, value) =>
    dispatch(updatePaymentBillingDetailsKey(key, value)),
  setCurrentAppointments: (appointments = []) => dispatch(setCurrentAppointments(appointments)),
});

const mapStateToProps = (state) => ({
  paymentDetails: state.paymentBillingDetails.paymentDetails,
  currentAppointments: state.paymentBillingDetails.currentAppointments,
});

function PaymentBillingDetailsContainer(props) {
  //Adding context to avoid props drilling
  return (
    <PaymentDetailsContext.Provider
      value={{
        paymentDetails: props.paymentDetails,
        currentAppointments: props.currentAppointments,
        updatePaymentBillingDetails: props.updatePaymentBillingDetails,
        updatePaymentBillingDetailsKey: props.updatePaymentBillingDetailsKey,
        setCurrentAppointments: props.setCurrentAppointments,
        history: props.history,
      }}
    >
      <PaymentBillingDetails />
    </PaymentDetailsContext.Provider>
  );
}

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(PaymentBillingDetailsContainer)
);
