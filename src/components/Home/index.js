import React from 'react';

import { Container, HomeSection } from './styles';
import Header from '../Header';

export default function Home() {
  return (
    <Container id="home">
      <Header />

      <HomeSection>
        <h1 className="home__gym">Gymno Firme</h1>
        <span className="home__span">Junte-se à nós</span>
      </HomeSection>
    </Container>
  );
}
