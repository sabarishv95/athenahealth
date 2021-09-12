const transactionsSchema = `
    scalar Date

    type Transaction {
        id: ID!
        date: Date
        paidAmount: Number
        paymentMode: String
    }
`;

module.exports = transactionsSchema;
