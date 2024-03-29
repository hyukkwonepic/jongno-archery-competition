import styled from 'styled-components';

export const MainCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 5rem 3rem 3rem 3rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: #333;
  }
`;
export const Dates = styled.div`
  span {
    text-align: center;
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0.5rem 0;
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
  cursor: pointer;
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
