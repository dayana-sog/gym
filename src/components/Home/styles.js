import styled from 'styled-components';

import HomeImage from '../../assets/home.jpg';

export const Container = styled.section`
  height: 98vh;
  background-image: -webkit-gradient(
      linear-gradient(to right, rgba(51, 51, 51, 0.7), rgba(17, 17, 17, 0.8))
    ),
    url(${HomeImage});
  background-image: linear-gradient(
      to right,
      rgba(68, 68, 68, 0.4),
      rgba(17, 17, 17, 0.8)
    ),
    url(${HomeImage});
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  position: relative;

  color: #f0f0f5;
`;

export const HomeSection = styled.div`
  color: #f0f0f5;

  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;

  .home__gym {
    display: block;
    font-size: 5rem;
    font-weight: 400;
    letter-spacing: 2rem;
    -webkit-animation-name: moveInLeft;
    animation-name: moveInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;

    margin-bottom: 0.3rem;

    @media (max-width: 600px) {
      font-size: 150%;
    }
  }

  .home__span {
    display: block;
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 1rem;
    -webkit-animation: moveInRight 1s ease-out;
    animation: moveInRight 1s ease-out;

    @media (max-width: 600px) {
      font-size: 80%;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
