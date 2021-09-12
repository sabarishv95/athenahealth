const appointmentsSchema = `
    scalar Date

    input AppointmentInput {
        salutation: String
        patientName: String
        gender: String
        dob: Date
        age: Int
        ageType: String
        appointmentDate: Date
        phoneNumber: Int
        address: String
        medicalScanDetails: [ScanInput]
    }

    type Appointment {
        id: ID!
        salutation: String
        patientName: String
        gender: String
        dob: Date
        age: Int
        ageType: String
        appointmentDate: Date
        phoneNumber: Int
        address: String
        medicalScanDetails: [Scan]
    }
`;

module.exports = appointmentsSchema;
