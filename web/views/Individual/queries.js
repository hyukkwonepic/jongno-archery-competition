import gql from 'graphql-tag';

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
