const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    individualApplication(id: ID!): IndividualApplication!
    individualApplications: [IndividualApplication!]!
  }

  type Mutation {
    createIndividualApplication(
      input: IndividualApplicationCreateInput!
    ): IndividualApplication
    updateIndividualApplication(
      id: ID!
      input: IndividualApplicationUpdateInput!
    ): IndividualApplication
    deleteIndividualApplication(
      id: ID!
      password: String!
    ): IndividualApplication
  }

  type IndividualApplication {
    id: ID!
    round: Int!
    number: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
  }

  input IndividualApplicationCreateInput {
    round: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
    password: String!
  }

  input IndividualApplicationUpdateInput {
    round: Int
    city: String
    range: String
    name: String
    mobile: String
  }
`;
