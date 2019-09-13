import styled from 'styled-components';

export const AdminHeader = styled.div`
  height: 4rem;
  background: #333;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    display: inline-block;
    margin-right: 1rem;
  }

  button {
    color: #333;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0 1rem;
    font-weight: 700;
    background: white;
    border: unset;
    cursor: pointer;
  }
`;
