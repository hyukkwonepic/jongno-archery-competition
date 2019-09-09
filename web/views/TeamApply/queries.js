import gql from 'graphql-tag';

export const CREATE_TEAM_APPLICATION = gql`
  mutation createTeamApplication($input: TeamApplicationCreateInput!) {
    createTeamApplication(input: $input) {
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
