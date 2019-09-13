const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    login(token: String!): Boolean!
    logout: Boolean!
    validateApplicationPassword(
      type: String!
      id: ID!
      password: String!
    ): Boolean!
  }
`;
