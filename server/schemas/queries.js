const queries = `
type Query {
    searchAppointments(fromDate: Date, toDate: Date, status: String, patientName: String): [Appointment]
}
`;
module.exports = queries;
