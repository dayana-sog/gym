import styled from 'styled-components';

export const Container = styled.footer`
  height: auto;

  background-color: #33383c;
  padding: 30px 0px;

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin: 1rem -15px 4rem -15px;
  }

  .row:before,
  .row:after {
    display: table;
    content: ' ';
  }

  .logo {
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    border-bottom: 3px solid #fff;

    @media (max-width: 900px) {
      font-size: 116%;
    }

    @media (max-width: 600px) {
      font-size: 80%;
    }
  }

  ul,
  ol {
    height: 10em;
    margin-top: 0;
    font-size: 16px;

    list-style-type: none;

    @media (max-width: 900px) {
      font-size: 66%;
    }

    @media (max-width: 600px) {
      font-size: 40%;
    }
  }

  li {
    padding-bottom: 1rem;
  }

  .menu-span {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    border-bottom: 1px solix #eee;

    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 17px;
    }
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: #f0f0f5;
  }
  a:hover {
    text-decoration: none;
    color: #f00;
    transition: all 0.5s;
  }
  a:active {
    text-decoration: none;
  }

  .space-left {
    margin-left: 20px;
  }

  .copy {
    text-align: center;
    border-top: 1px solid #eee;
    padding-top: 1.5rem;
    color: #fff;
    font-size: 16px;

    @media (max-width: 900px) {
      font-size: 66%;
    }

    @media (max-width: 600px) {
      font-size: 40%;
      margin-top: 10rem;
    }
  }
`;
