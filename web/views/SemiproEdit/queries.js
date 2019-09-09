import gql from 'graphql-tag';

export const SEMIPRO_APPLICATION = gql`
  query semiproApplication($id: ID!) {
    semiproApplication(id: $id) {
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

export const UPDATE_SEMIPRO_APPLICATION = gql`
  mutation updateSemiproApplication(
    $id: ID!
    $input: SemiproApplicationUpdateInput!
  ) {
    updateSemiproApplication(id: $id, input: $input) {
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
