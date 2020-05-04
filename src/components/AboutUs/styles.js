import styled from 'styled-components';

export const Container = styled.section`
  height: auto;
  margin-top: -25vh;
  padding: 30rem 0 18rem 0;
  background: rgb(187, 187, 187);

  white-space: wrap;

  div {
    height: auto;
    width: 70%;
    margin: 0 auto;

    word-wrap: break-word;
    text-align: center;
    letter-spacing: 3px;

    h1 {
      margin-bottom: 1em;
    }
  }

  @media (max-width: 900px) {
    font-size: 80%;
  }

  @media (max-width: 600px) {
    font-size: 60%;
    padding: 23rem 0 6rem 0;
  }
`;
