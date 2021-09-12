const scansSchema = `
    type Scan {
        id: ID!
        scanName: String
        scanAmount: Number
        discount: Number
        totalAmount: Number
    }
`;

module.exports = scansSchema;
