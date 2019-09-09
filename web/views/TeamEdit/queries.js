import gql from 'graphql-tag';

export const TEAM_APPLICATION = gql`
  query teamApplication($id: ID!) {
    teamApplication(id: $id) {
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

export const UPDATE_TEAM_APPLICATION = gql`
  mutation updateTeamApplication(
    $id: ID!
    $input: TeamApplicationUpdateInput!
  ) {
    updateTeamApplication(id: $id, input: $input) {
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
