const transactionsSchema = `
    input TransactionInput {
        date: Date
        paidAmount: Int
        paymentMode: String
    }

    type Transaction {
        _id: ID!
        date: Date
        paidAmount: Int
        paymentMode: String
    }
`;

module.exports = transactionsSchema;
