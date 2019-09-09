const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    validateApplicationPassword(
      type: String!
      id: ID!
      password: String!
    ): Boolean!
  }
`;
