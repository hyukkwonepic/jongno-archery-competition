const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    teamApplication(id: ID!): TeamApplication!
    teamApplications: [TeamApplication!]!
  }

  type Mutation {
    createTeamApplication(input: TeamApplicationCreateInput!): TeamApplication
    updateTeamApplication(
      id: ID!
      input: TeamApplicationUpdateInput!
    ): TeamApplication
    deleteTeamApplication(id: ID!, password: String!): TeamApplication
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
    round: Int
    city: String
    range: String
    player1: String
    player2: String
    player3: String
    player4: String
    player5: String
    substitute: String
    mobile: String
  }
`;
