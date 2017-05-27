import React from 'react';
import {
  MOSTRA_TODAS,
  MOSTRA_FINALIZADAS,
  MOSTRA_ATIVAS
} from '../actions/types';

import Filtro from './Filtro';

const FiltrosLista = ({
  filtrarClick
}) => (
  <p>
    Mostrar:
    {' '}
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
  </p>
);

export default FiltrosLista;