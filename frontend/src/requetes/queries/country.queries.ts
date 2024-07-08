import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  query getCountries {
    countries {
      id
      name
      emoji
      code
    }
  }
`;

export const GET_COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;
