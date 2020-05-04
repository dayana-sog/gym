import styled from 'styled-components';

import girlgym from '../../assets/girlgym.jpg';

export const Container = styled.section`
  height: 127rem;
  color: #fff;
  background: rgb(187, 187, 187);

  position: relative;

  @media (max-width: 600px) {
    font-size: 90%;
  }

  .gallery-container {
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: url(${girlgym});
    background-size: cover;

    z-index: 0;

    .button {
      background: transparent;
      border: 0;
      margin-top: 1.5em;

      width: 10em;
    }
  }

  .map {
    & iframe {
      width: 100%;
      height: 70rem;
      border: none;
    }
  }

  .map-contact-detalis {
    width: 28em;
    padding: 40px;
    background: black;
    position: absolute;
    right: 90px;
    top: 33em;
    -webkit-box-shadow: 10px 10px 20px rgba(198, 198, 198, 0.9);
    box-shadow: 10px 10px 20px rgba(198, 198, 198, 0.9);

    @media (max-width: 600px) {
      display: none;
    }
  }

  .open-time {
    overflow: hidden;
    margin-bottom: 10px;

    h5 {
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
      float: left;
      vertical-align: left;
      color: red;
    }

    ul {
      float: right;

      li {
        font-size: 14px;
        list-style: none;
        font-weight: 500;
        line-height: 30px;
        position: relative;
        padding-right: 108px;

        span {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }

  form {
    display: block;
    margin-top: 0em;

    input {
      width: 100%;
      margin-right: 20px;
      float: left;
      height: 40px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #272727;
      border: 1px solid #e1e1e1;
      padding-left: 20px;
      border-radius: 2px;
    }

    .phone {
      width: 47%;
      margin-right: 0;
    }

    textarea {
      width: 100%;
      height: 80px;
      resize: none;
      font-size: 16px;
      color: #272727;
      border: 1px solid #e1e1e1;
      border-radius: 2px;
      padding-left: 20px;
      padding-top: 10px;
      margin-bottom: 18px;
    }

    button {
      padding: 15px;
      font-size: 1em;
      border-radius: 5px;
      background: #ffffff;
      color: red;
      border: none;

      &:hover {
        background: #f36100;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .map-contact-form {
    h5 {
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: red;
    }
  }
`;
