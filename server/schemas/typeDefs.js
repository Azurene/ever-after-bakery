const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Mutation {
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;