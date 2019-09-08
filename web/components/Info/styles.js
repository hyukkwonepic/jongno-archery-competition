import styled from 'styled-components';

export const Info = styled.div`
  text-align: center;

  background: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 27rem;
  padding-top: 5rem;
  padding-bottom: 3rem;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  /* margin-bottom: 2rem; */

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: #333;

    @media only screen and (min-width: 960px) {
      font-size: 2.2rem;
    }
  }
`;

export const Dates = styled.div`
  span {
    text-align: center;
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    color: #333;
    margin: 0.5rem 0;
  }
`;

export const Button = styled.a`
  display: inline-block;
  border-radius: 10rem;
  font-size: 1.8rem;
  font-weight: 700;
  height: 4.5rem;
  line-height: 4.5rem;
  border: none;
  padding: unset;
  width: 14rem;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background: #a00000;
  margin-right: 0.8rem;
  color: white;
`;
