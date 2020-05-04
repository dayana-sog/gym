import React, { useState } from 'react';
import Lottie from 'lottie-react-web';

import Player from '../Modal';

import play from '../../assets/play.json';

import { Container } from './styles';

export default function Contact() {
  const [send, setSend] = useState('Enviar');
  const [open, setOpen] = useState(false);

  function sendEmail() {
    setTimeout(() => {
      setSend('Enviado');
    }, 1000);
    return setSend('Enviando...');
  }

  function handleVideo() {
    setOpen(!open);
  }

  return (
    <Container>
      <div className="gallery-container">
        <h1 className="text-galery">Ótima localização</h1>

        <button className="button" type="button" onClick={() => setOpen(true)}>
          <Lottie
            width="40%"
            options={{
              animationData: play,
              loop: true,
            }}
          />
        </button>
        {open ? <Player onCloseModal={handleVideo} /> : null}
      </div>

      <div className="map" id="contacto">
        <iframe
          title="teste"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.718539647084!2d-9.136107361330646!3d38.74722058461959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933af05b43a7d%3A0x6e6206164990ab18!2sR.%20Pedro%20Ivo%2013B%2C%201700-082%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1588090097058!5m2!1spt-PT!2spt"
          allowFullScreen=""
        />
      </div>

      <div className="map-contact-detalis">
        <div className="open-time">
          <h5>Horários: </h5>
          <ul>
            <li>
              Durante a semana: <span>10h - 22h</span>
            </li>
            <li>
              Sábado: <span>10h - 14h</span>
            </li>
            <li>
              Domingo: <span>Fechado</span>
            </li>
          </ul>
        </div>

        <div className="map-contact-form">
          <h5>Contate-nos</h5>

          <form
            action="https://postmail.invotes.com/send"
            method="post"
            id="email_form"
            onSubmit={sendEmail}
          >
            <input type="text" name="extra_nome" required placeholder="Nome" />
            <input type="email" name="reply_to" required placeholder="Email" />
            <input type="text" name="subject" required placeholder="Assunto" />
            <textarea name="text" placeholder="Messagem" />
            <input
              type="hidden"
              name="access_token"
              value="hs6h7m2187t2uicqpdd7bxdp"
            />

            <input
              type="hidden"
              name="success_url"
              value=".?message=Email+Successfully+Sent%21&isError=0"
            />
            <input
              type="hidden"
              name="error_url"
              value=".?message=Email+could+not+be+sent.&isError=1"
            />
            <button type="submit">{send}</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
