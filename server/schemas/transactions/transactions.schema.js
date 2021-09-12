const transactionsSchema = `
    type Transaction {
        id: ID!
        date: Date
        paidAmount: Int
        paymentMode: String
    }
`;

module.exports = transactionsSchema;
