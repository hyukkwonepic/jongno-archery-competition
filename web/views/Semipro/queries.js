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

export const SEMIPRO_APPLICATIONS = gql`
  query semiproApplications {
    semiproApplications {
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

export const DELETE_SEMIPRO_APPLICATION = gql`
  mutation deleteSemiproApplication($id: ID!, $password: String!) {
    deleteSemiproApplication(id: $id, password: $password) {
      id
      round
      name
      number
      range
      mobile
    }
  }
`;
