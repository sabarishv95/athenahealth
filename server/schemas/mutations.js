const  mutations =  `
type Mutation {
    createAppointment(appointment: AppointmentInput!): Appointment
    addTransaction(transaction: TransactionInput!, appointment: ID, transactions: [ID]): Appointment
}
`
module.exports = mutations