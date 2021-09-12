require("json-bigint-patch");

const appointmentsSchema = `
    scalar Date
    scalar BigInt

    input AppointmentInput {
        salutation: String
        patientName: String
        gender: String
        dob: Date
        age: Int
        ageType: String
        appointmentDate: Date
        phoneNumber: BigInt
        address: String
        status: String,
        medicalScanDetails: [ScanInput]
    }

    type Appointment {
        _id: ID!
        salutation: String
        patientName: String
        gender: String
        dob: Date
        age: Int
        ageType: String
        appointmentDate: Date
        phoneNumber: BigInt
        address: String
        status: String
        medicalScanDetails: [Scan]
    }
`;

module.exports = appointmentsSchema;
