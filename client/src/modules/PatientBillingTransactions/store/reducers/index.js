import { SET_APPOINTMENTS, SET_APPOINTMENT } from "../types";

const INITIAL_STATE = {
  appointments: [],
  appointment: {},
};

export default function paymentTransactions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_APPOINTMENTS: {
      return {
        ...state,
        appointments: action.appointments,
      };
    }
    case SET_APPOINTMENT: {
      return {
        ...state,
        appointment: action.appointment,
      };
    }
    default: {
      return state;
    }
  }
}
