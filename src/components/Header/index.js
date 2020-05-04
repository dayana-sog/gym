import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container, LogoHome } from './styles';

import logo from '../../assets/haltere.svg';

export default function Header() {
  return (
    <Container>
      <LogoHome>
        <img src={logo} alt="Logo" />
        <p>Gymno Firme</p>
      </LogoHome>

      <ul>
        <AnchorLink href="/">Home</AnchorLink>
        <AnchorLink offset="250" href="#aboutUs">
          Sobre Nós
        </AnchorLink>
        <AnchorLink href="#prices">Preços</AnchorLink>
        <AnchorLink href="#contacto">Contactos</AnchorLink>
      </ul>
    </Container>
  );
}
