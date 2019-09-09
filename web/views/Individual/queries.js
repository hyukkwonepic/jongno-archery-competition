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

export const INDIVIDUAL_APPLICATIONS = gql`
  query individualApplications {
    individualApplications {
      id
      round
      number
      city
      range
      name
      mobile
    }
  }
`;

export const DELETE_INDIVIDUAL_APPLICATION = gql`
  mutation deleteIndividualApplication($id: ID!, $password: String!) {
    deleteIndividualApplication(id: $id, password: $password) {
      id
      round
      name
      number
      range
      mobile
    }
  }
`;
