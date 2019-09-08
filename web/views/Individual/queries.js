import gql from 'graphql-tag';

export const INDIVIDUAL_APPLICATIONS = gql`
  query INDIVIDUAL_APPLICATIONS {
    individualApplications {
      id
      round
      number
      city
      range
      name
      mobile
      password
    }
  }
`;
