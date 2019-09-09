import gql from 'graphql-tag';

export const VALIDATE_APPLICATION_PASSWORD = gql`
  query validateApplicationPassword(
    $type: String!
    $id: ID!
    $password: String!
  ) {
    validateApplicationPassword(type: $type, id: $id, password: $password)
  }
`;

export const TEAM_APPLICATIONS = gql`
  query teamApplications {
    teamApplications {
      id
      round
      city
      range
      player1
      player2
      player3
      player4
      player5
      substitute
      mobile
    }
  }
`;

export const DELETE_TEAM_APPLICATION = gql`
  mutation deleteTeamApplication($id: ID!, $password: String!) {
    deleteTeamApplication(id: $id, password: $password) {
      id
      round
      city
      range
      player1
      player2
      player3
      player4
      player5
      substitute
      mobile
    }
  }
`;
