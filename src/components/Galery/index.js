import React from 'react';

import image1 from '../../assets/image1.JPG';
import image2 from '../../assets/image2.JPG';
import image3 from '../../assets/image3.JPG';
import image4 from '../../assets/image4.JPG';
import image5 from '../../assets/image5.JPG';
import image6 from '../../assets/image6.JPG';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.JPG';

import { Container } from './styles';

export default function Galery() {
  return (
    <Container>
      <div id="prices">
        <h1>Galeria</h1>
        <p>Venha conhecer o nosso ginásio!</p>
      </div>

      <div className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img src={image1} alt="IMAGE1" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--2">
          <img src={image2} alt="IMAGE2" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--3">
          <img src={image3} alt="IMAGE3" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--4">
          <img src={image4} alt="IMAGE4" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--5">
          <img src={image5} alt="IMAGE5" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--6">
          <img src={image6} alt="IMAGE6" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--7">
          <img src={image7} alt="IMAGE7" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--8">
          <img src={image8} alt="IMAGE7" className="gallery__img" />
        </figure>
      </div>
    </Container>
  );
}
