import styled from 'styled-components';

export const Container = styled.nav`
  height: 9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;
  color: #f0f0f5;

  ul {
    margin-right: 2.5rem;
    cursor: pointer;

    a:link,
    a:visited {
      text-decoration: none;
      color: #f0f0f5;
      margin-left: 2em;
    }
    a:hover {
      text-decoration: none;
      color: #f00;
      transition: all 0.5s;
    }
    a:active {
      text-decoration: none;
    }
  }

  @media (max-width: 900px) {
    font-size: 75%;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 38%;
  }
`;

export const LogoHome = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 5em;
    height: 5em;
    margin-left: 2.5em;
    margin-right: 1.5em;
  }
`;
