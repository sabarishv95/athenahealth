import React from "react";
import { connect } from "react-redux";
import PatientBillingTransactions from "../";
import { setAppointment, setAppointments } from "../store/actions";
import PaymentTransactionsContext from "../context";

const mapDispatchToProps = (dispatch) => ({
  setAppointment: (appointment = {}) => dispatch(setAppointment(appointment)),
  setAppointments: (appointments = []) => dispatch(setAppointments(appointments)),
});

const mapStateToProps = (state) => ({
  appointments: state.paymentTransactions.appointments,
  appointment: state.paymentTransactions.appointment,
});

function PatientBillingTransactionsContainer(props) {
  //Adding context to avoid props drilling
  return (
    <PaymentTransactionsContext.Provider
      value={{
        appointments: props.appointments,
        appointment: props.appointment,
        setAppointment: props.setAppointment,
        setAppointments: props.setAppointments,
      }}
    >
      <PatientBillingTransactions />
    </PaymentTransactionsContext.Provider>
  );
}

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(PatientBillingTransactionsContainer)
);
