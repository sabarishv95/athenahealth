import {
  UPDATE_PAYMENT_BILLING_DETAILS,
  UPDATE_PAYMENT_BILLING_DETAILS_KEY,
  SET_CURRENT_APPOINTMENTS,
} from "../types";

export const INITIAL_STATE = {
  paymentDetails: {
    salutation: "",
    patientName: "",
    gender: "",
    dob: "",
    age: null,
    ageType: "",
    appointmentDate: "",
    phoneNumber: null,
    address: {
      streetAddress: "",
      streetAddress1: "",
      city: "",
      state: "",
      zipCode: null,
      country: "",
    },
    medicalScanDetails: [],
  },
  currentAppointments: [],
};

export default function paymentBillingDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_PAYMENT_BILLING_DETAILS: {
      return {
        ...state,
        paymentDetails: action.data,
      };
    }
    case UPDATE_PAYMENT_BILLING_DETAILS_KEY: {
      return {
        ...state,
        paymentDetails: {
          ...state.paymentDetails,
          [action.key]: action.value,
        },
      };
    }
    case SET_CURRENT_APPOINTMENTS: {
      return {
        ...state,
        currentAppointments: action.appointments
      }
    }
    default: {
      return state;
    }
  }
}
