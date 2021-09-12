const transactionsSchema = `
    type Transaction {
        _id: ID!
        date: Date
        paidAmount: Int
        paymentMode: String
    }
`;

module.exports = transactionsSchema;
