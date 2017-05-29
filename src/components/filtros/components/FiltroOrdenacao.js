import React from 'react';
import style from './FiltroOrdenacao.scss';

import {
  MOSTRA_RECENTES,
  MOSTRA_ANTIGAS
} from '../actions/types';

const FiltroOrdenacao = ({ ordenarClick }) => (
  <div className={style.ordenacaoRow}>
    <p className={style.ordenarLabel}>
      Ordenar por:
    </p>
    <div className={style.ordenacaoItems}>
      <a
        href='#'
        onClick={(evt) => {
          evt.preventDefault();
          ordenarClick(MOSTRA_RECENTES);
        }}
      >
        Mais recentes
      </a>
      <a
        href='#'
        onClick={(evt) => {
          evt.preventDefault();
          ordenarClick(MOSTRA_ANTIGAS);
        }}
      >
        Mais antigos
      </a>
    </div>
  </div>
);

export default FiltroOrdenacao;