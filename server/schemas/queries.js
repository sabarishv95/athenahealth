const queries = `
type Query {
    searchAppointments(fromDate: Date, toDate: Date, status: String, patientName: String): [Appointment]
    getAppointment(appointment: ID): Appointment
}
`;
module.exports = queries;
