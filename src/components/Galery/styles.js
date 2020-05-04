import styled from 'styled-components';

export const Container = styled.section`
  height: auto;
  color: #fff;
  /* background: rgb(187, 187, 187);*/
  background: #eee;

  #prices {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: #f36100;

    color: #fff;
    height: 21.5rem;

    h1 {
      font-size: 4rem;
      font-weight: 300;

      @media (max-width: 600px) {
        font-size: 150%;
      }
    }

    p {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 200;

      @media (max-width: 600px) {
        font-size: 90%;
      }
    }
  }

  .gallery {
    height: auto;
    padding: 3rem 2rem;

    background: #eee;
    /* background: rgb(187, 187, 187);*/

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 1.5rem;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;

      &__img {
        margin-bottom: 2rem;
      }
    }

    &__item {
      &--1 {
        grid-column: 1 / span 2;
        grid-row: 1 / 6;
      }

      &--2 {
        grid-column: 5 / span 2;
        grid-row: 1 / 6;
      }

      &--3 {
        grid-column: 7 / span 2;
        grid-row: 1 / 5;
      }

      &--4 {
        grid-column: 7 / span 2;
        grid-row: 5 / 9;
      }

      &--5 {
        grid-column: 1 / span 2;
        grid-row: 6 / 9;
      }
      &--6 {
        grid-column: 3 / span 2;
        grid-row: 4 / 9;
      }

      &--7 {
        grid-column: 5 / span 2;
        grid-row: 6 / 9;
      }

      &--8 {
        grid-column: 3 / span 2;
        grid-row: 1 / 4;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
`;
