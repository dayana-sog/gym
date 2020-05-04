import styled from 'styled-components';

export const Container = styled.div`
  .popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(17, 17, 17, 0.8);
    z-index: 9999;
    margin: 0;
    transition: all 0.3s;

    @media (max-width: 600px) {
      height: 100%;
    }

    &__content {
      width: 700px;
      height: 500px;
      background: #fff;
      box-shadow: 0 10px 20px rgba(17, 17, 17, 0.7);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 4px;
      margin-top: 0;

      @media (max-width: 600px) {
        width: 300px;
        height: 500px;
      }
    }
  }
`;

export const Exit = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  border: none;
  background: #fff;
  font-weight: bold;
  z-index: 9999;
  top: -14px;
  right: -15px;
`;
