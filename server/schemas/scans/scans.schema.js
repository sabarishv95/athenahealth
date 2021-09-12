const scansSchema = `
    input ScanInput {
        scanName: String
        scanAmount: Int
        discount: Int
        totalAmount: Int
    }

    type Scan {
        _id: ID!
        scanName: String
        scanAmount: Int
        discount: Int
        totalAmount: Int
    }
`;

module.exports = scansSchema;
