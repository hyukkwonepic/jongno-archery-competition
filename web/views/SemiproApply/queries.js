import gql from 'graphql-tag';

export const CREATE_SEMIPRO_APPLICATION = gql`
  mutation createSemiproApplication($input: SemiproApplicationCreateInput!) {
    createSemiproApplication(input: $input) {
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
