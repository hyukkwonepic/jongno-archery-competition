import gql from 'graphql-tag';

export const CREATE_INDIVIDUAL_APPLICATION = gql`
  mutation createIndividualApplication(
    $input: IndividualApplicationCreateInput!
  ) {
    createIndividualApplication(input: $input) {
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

export const VALIDATE_APPLICATION_AVAILABILITY = gql`
  query validateApplicationAvailability {
    validateApplicationAvailability
  }
`;
