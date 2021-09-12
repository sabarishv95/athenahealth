import { SET_APPOINTMENTS, SET_APPOINTMENT } from "../types";

export const setAppointments = (appointments = []) => ({
  type: SET_APPOINTMENTS,
  appointments,
});

export const setAppointment = (appointment = {}) => ({
  type: SET_APPOINTMENT,
  appointment,
});
