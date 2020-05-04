import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import video from '../../assets/videoGym.mp4';

import { Container, Exit } from './styles';

function Player({ onCloseModal }) {
  return (
    <Container>
      <div className="popup" id="popup">
        <div className="popup__content">
          <ReactPlayer url={video} width="100%" height="100%" playing />
          <Exit onClick={onCloseModal}>X</Exit>
        </div>
      </div>
    </Container>
  );
}

Player.propTypes = {
  onCloseModal: PropTypes.func.isRequired, // isOpen must be a boolean
};

export default Player;
