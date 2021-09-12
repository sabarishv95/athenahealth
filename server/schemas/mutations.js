const  mutations =  `
type Mutation {
    createAppointment(appointment: AppointmentInput!): Appointment
}
`
module.exports = mutations