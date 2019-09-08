import styled from 'styled-components';

export const Nav = styled.nav`
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

  background: white;
`;

export const Container = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (min-width: 960px) {
    height: 12rem;
    justify-content: space-between;

    max-width: 100.4rem;
    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  @media only screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 700;
    color: #999;
  }

  img {
    height: 5rem;
    @media only screen and (min-width: 960px) {
      height: 6.5rem;
      margin-right: 2rem;
    }
  }

  span {
    display: none;
    @media only screen and (min-width: 960px) {
      display: block;
      margin-right: 2rem;
    }
  }
`;

export const Menu = styled.ul`
  display: none;

  @media only screen and (min-width: 960px) {
    display: block;
    list-style: none;
  }

  li {
    @media only screen and (min-width: 960px) {
      display: inline-block;
      margin-left: 3rem;
    }

    a {
      @media only screen and (min-width: 960px) {
        font-size: 1.6rem;
        font-weight: 700;
        color: #999;
        text-decoration: none;
      }
    }

    a.active {
      @media only screen and (min-width: 960px) {
        color: #333;
      }
    }
  }
`;
