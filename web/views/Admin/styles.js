import styled from 'styled-components';

export const Admin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (min-width: 960px) {
    max-width: 50rem;
    margin: 0 auto;
  }

  form {
    width: 100%;
    font-size: 1.6rem;

    label {
      display: block;
    }

    input {
      display: block;
      height: 3rem;
      width: 100%;
    }
  }
`;
