import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 6rem;
  padding-bottom: 2rem;

  @media only screen and (min-width: 960px) {
    padding-top: 11rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 6rem;
  margin-top: 0;

  span {
    font-size: 1.8rem;
    font-weight: 600;
  }

  @media only screen and (min-width: 960px) {
    margin-bottom: 7rem;
    font-size: 2.8rem;
  }
`;
