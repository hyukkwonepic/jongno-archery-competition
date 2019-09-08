const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    individualApplications: [IndividualApplication!]!
    teamApplications: [TeamApplication!]!
    semiproApplications: [SemiproApplication!]!
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

    createTeamApplication(input: TeamApplicationCreateInput!): TeamApplication
    updateTeamApplication(
      id: ID!
      input: TeamApplicationUpdateInput!
    ): TeamApplication
    deleteTeamApplication(id: ID!, password: String!): TeamApplication

    createSemiproApplication(
      input: SemiproApplicationCreateInput!
    ): SemiproApplication
    updateSemiproApplication(
      id: ID!
      input: SemiproApplicationUpdateInput!
    ): SemiproApplication
    deleteSemiproApplication(id: ID!, password: String!): SemiproApplication
  }

  type IndividualApplication {
    id: ID!
    round: Int!
    number: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
    password: String!
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
    round: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
    password: String!
  }

  type TeamApplication {
    id: ID!
    round: Int!
    city: String!
    range: String!
    player1: String!
    player2: String!
    player3: String!
    player4: String!
    player5: String!
    substitute: String!
    mobile: String!
    password: String!
  }

  input TeamApplicationCreateInput {
    round: Int!
    city: String!
    range: String!
    player1: String!
    player2: String!
    player3: String!
    player4: String!
    player5: String!
    substitute: String!
    mobile: String!
    password: String!
  }

  input TeamApplicationUpdateInput {
    round: Int!
    city: String!
    range: String!
    player1: String!
    player2: String!
    player3: String!
    player4: String!
    player5: String!
    substitute: String!
    mobile: String!
    password: String!
  }

  type SemiproApplication {
    id: ID!
    round: Int!
    number: Int!
    city: String!
    range: String!
    name: String!
    mobile: String!
    password: String!
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
    password: String!
  }
`;

module.exports = typeDefs;
