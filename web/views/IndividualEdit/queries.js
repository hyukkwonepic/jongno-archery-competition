import gql from 'graphql-tag';

export const INDIVIDUAL_APPLICATION = gql`
  query individualApplication($id: ID!) {
    individualApplication(id: $id) {
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

export const UPDATE_INDIVIDUAL_APPLICATION = gql`
  mutation updateIndividualApplication(
    $id: ID!
    $input: IndividualApplicationUpdateInput!
  ) {
    updateIndividualApplication(id: $id, input: $input) {
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
