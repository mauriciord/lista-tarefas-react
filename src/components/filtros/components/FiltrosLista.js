import React from 'react';
import {
  MOSTRA_TODAS,
  MOSTRA_FINALIZADAS,
  MOSTRA_ATIVAS
} from '../actions/types';

import style from './FiltrosLista.scss';

import Filtro from './Filtro';

const FiltrosLista = ({
  filtrarClick
}) => (
  <div className={style.filtroLista}>
    <p className={style.filtrarLabel}>
        Mostrar:
    </p>
    <div className={style.filtroItems}>
        <Filtro filtrar={() => filtrarClick(MOSTRA_TODAS)}>
          Todos
      </Filtro>
        {' '}
        <Filtro filtrar={() => filtrarClick(MOSTRA_FINALIZADAS)}>
          Finalizadas
      </Filtro>
        {' '}
        <Filtro filtrar={() => filtrarClick(MOSTRA_ATIVAS)}>
          Não finalizadas
      </Filtro>
    </div>
  </div>
);

export default FiltrosLista;