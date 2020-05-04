import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

import 'mailgo';

import { Container } from './styles';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="container-logo">
            <span className="logo">Gymno Firme</span>
          </div>
          <div className="container-menu">
            <ul className="menu">
              <div className="menu-span">Menu</div>
              <li>
                <AnchorLink href="#home">Home</AnchorLink>
              </li>

              <li>
                <AnchorLink href="#aboutUs">Sobre Nós</AnchorLink>
              </li>

              <li>
                <AnchorLink href="#prices">Preços</AnchorLink>
              </li>

              <li>
                <AnchorLink href="#contacto">Contactos </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="container-address">
            <ul className="address">
              <div className="menu-span">Contactos</div>
              <li>
                <FaPhoneAlt size={20} color="#f00" />
                <a href="tel:218402903" className="space-left">
                  222 222 222
                </a>
              </li>
              <li>
                <FaWhatsapp size={20} color="#f00" />
                <a href="tel:351919521653" className="space-left">
                  999 999 999
                </a>
              </li>
              <li>
                <FaMapMarkerAlt size={20} color="#f00" />
                <a href="/" className="space-left">
                  Rua Teste, 01 B - Lisboa
                </a>
              </li>
              <li>
                <MdMailOutline size={20} color="#f00" />
                <a href="mailto:gimnofirme@sapo.pt" className="space-left">
                  teste@teste.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy">
          © Copyright {year} - Todos os direitos reservados a Gymno Firme
        </div>
      </div>
    </Container>
  );
}
