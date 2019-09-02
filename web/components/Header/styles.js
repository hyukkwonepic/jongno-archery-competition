import styled from 'styled-components';

export const Nav = styled.nav`
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: white;
`;

export const Logo = styled.div`
  img {
    height: 5rem;
  }

  span {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: none;

  li {
  }
`;
