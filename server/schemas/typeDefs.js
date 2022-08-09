const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        user(username: String!): User
      }

    type Mutation {
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;