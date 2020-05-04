import styled from 'styled-components';

export const Container = styled.section`
  height: auto;
  background: rgb(17, 17, 17);
  color: #fff;
  padding-bottom: 1rem;

  #prices {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: red;

    color: #fff;
    height: 21.5rem;

    @media (max-width: 600px) {
      height: 15rem;
    }

    h1 {
      font-size: 5rem;
      font-weight: 300;

      @media (max-width: 600px) {
        font-size: 150%;
      }
    }

    p {
      margin-top: 0.4rem;
      font-size: 2rem;
      font-weight: 200;

      @media (max-width: 600px) {
        font-size: 60%;
      }
    }
  }

  .row {
    flex-grow: 1;
    height: auto;
    padding-top: 3rem;
    margin: 10rem;

    @media (max-width: 600px) {
      margin: 3rem;
    }
  }

  .card {
    text-align: center;
    padding: 2.5rem 0.5rem;
    border: 1px solid #464646;
    -webkit-transform: skewY(-4deg);
    -ms-transform: skewY(-4deg);
    transform: skewY(-4deg);

    @media (max-width: 900px) {
      flex-grow: 0;
      max-width: 80%;
      flex-basis: 100%;
      margin-top: 2rem;
    }

    @media (max-width: 600px) {
      max-width: 100%;
      margin-right: 0;
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover {
      background: #c4c4c4;
      color: rgb(17, 17, 17);
      transition: all 0.5s;

      li {
        color: rgb(17, 17, 17);
      }

      button {
        background: #f36100;
      }
    }

    h3 {
      margin-bottom: 0.6rem;
    }

    .pi-price {
      margin-bottom: 1rem;

      h2 {
        font-size: 60px;
        color: #f36100;
        font-weight: 600;
      }

      span {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    ul {
      margin-bottom: 1.5rem;

      li {
        font-size: 14px;
        color: #c4c4c4;
        line-height: 32px;
        list-style: none;
      }
    }

    button {
      width: 85%;
      height: 60px;
      background: #333;
      border: 0;
      border-radius: 8px;

      a:link,
      a:visited {
        color: #fff;
        font-weight: bold;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
      }

      a:active {
        text-decoration: none;
      }
    }
  }
`;
