import {
  UPDATE_PAYMENT_BILLING_DETAILS,
  UPDATE_PAYMENT_BILLING_DETAILS_KEY,
  SET_CURRENT_APPOINTMENTS,
} from "../types";

export const updatePaymentBillingDetails = (data) => ({
  type: UPDATE_PAYMENT_BILLING_DETAILS,
  data,
});

export const updatePaymentBillingDetailsKey = (key, value) => ({
  type: UPDATE_PAYMENT_BILLING_DETAILS_KEY,
  key,
  value,
});

export const setCurrentAppointments = (appointments = []) => ({
  type: SET_CURRENT_APPOINTMENTS,
  appointments,
});
