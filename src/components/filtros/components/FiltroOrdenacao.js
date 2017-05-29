import React from 'react';

import {
  MOSTRA_RECENTES,
  MOSTRA_ANTIGAS
} from '../actions/types';

const FiltroOrdenacao = ({ ordenarClick }) => (
  <p>
    Ordenar por:
    {' '}
    <a 
      href='#'
      onClick={(evt) => {
        evt.preventDefault();
        ordenarClick(MOSTRA_RECENTES);
      }}
    >
      Mais recentes
    </a>
    {' '}
    <a 
      href='#'
      onClick={(evt) => {
        evt.preventDefault();
        ordenarClick(MOSTRA_ANTIGAS);
      }}
    >
      Mais antigos
    </a>
  </p>
);

export default FiltroOrdenacao;