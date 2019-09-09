const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    semiproApplication(id: ID!): SemiproApplication!
    semiproApplications: [SemiproApplication!]!
  }

  type Mutation {
    createSemiproApplication(
      input: SemiproApplicationCreateInput!
    ): SemiproApplication
    updateSemiproApplication(
      id: ID!
      input: SemiproApplicationUpdateInput!
    ): SemiproApplication
    deleteSemiproApplication(id: ID!, password: String!): SemiproApplication
  }

  type SemiproApplication {
    id: ID!
    round: Int!
    number: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
  }

  input SemiproApplicationCreateInput {
    round: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
    password: String!
  }

  input SemiproApplicationUpdateInput {
    round: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
  }
`;
