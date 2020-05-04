import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Grid from '@material-ui/core/Grid';

import { Container } from './styles';

export default function Prices() {
  return (
    <Container>
      <div id="prices">
        <h1>Preços</h1>
        <p>Escolhe o melhor plano para ti!</p>
      </div>

      <Grid className="row">
        <Grid container justify="center">
          <Grid item className="card" xs={3}>
            <h3>2x por semana</h3>
            <div className="pi-price">
              <h2>20€</h2>
              <span>PLANO SINGLE/MÊS</span>
            </div>
            <ul>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
            </ul>
            <button type="button">
              <AnchorLink href="#contacto">Dúvidas</AnchorLink>
            </button>
          </Grid>

          <Grid item className="card" xs={3}>
            <h3>3x por semana</h3>
            <div className="pi-price">
              <h2>23€</h2>
              <span>PLANO SINGLE/MÊS</span>
            </div>
            <ul>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
            </ul>
            <button type="button">
              <AnchorLink href="#contacto">Dúvidas</AnchorLink>
            </button>
          </Grid>

          <Grid item className="card" xs={3}>
            <h3>Livre Trânsito</h3>
            <div className="pi-price">
              <h2>25€</h2>
              <span>PLANO SINGLE/MÊS</span>
            </div>
            <ul>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
              <li>Unlimited equipments</li>
            </ul>
            <button type="button">
              <AnchorLink href="#contacto">Dúvidas</AnchorLink>
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
