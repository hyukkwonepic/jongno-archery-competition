import styled from 'styled-components';

export const MainCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 4rem 3rem 3rem 3rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
`;
export const Dates = styled.div`
  span {
    text-align: center;
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    color: #333;
  }
`;

export const Buttons = styled.div`
  display: flex;

  a {
    width: 100%;
  }
`;

export const Button = styled.button`
  border-radius: 10rem;
  font-size: 1.8rem;
  font-weight: 700;
  height: 4.5rem;
  line-height: 4.5rem;
  border: none;
  padding: unset;
  width: 100%;
`;

export const PrimaryButton = styled(Button)`
  background: #a00000;
  margin-right: 0.8rem;
  width: calc(100% - 0.8rem);
  color: white;
`;
export const SecondaryButton = styled(Button)`
  background: #e6ecf0;
  margin-left: 0.8rem;
  width: calc(100% - 0.8rem);
`;
