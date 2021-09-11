import { UPDATE_PAYMENT_BILLING_DETAILS, UPDATE_PAYMENT_BILLING_DETAILS_KEY } from "../types";

const INITIAL_STATE = {
  paymentDetails: {
    salutation: "",
    patientName: "",
    gender: "",
    dob: "",
    age: null,
    ageType: "",
    appointmentDate: "",
    address: {
      streetAddress: "",
      streetAddress1: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    medicalScanDetails: [],
  },
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
    default: {
      return state;
    }
  }
}
