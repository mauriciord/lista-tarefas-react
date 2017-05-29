import orderBy from 'lodash/orderBy';

import {
  MOSTRA_RECENTES,
  MOSTRA_ANTIGAS
} from '../actions/types';

export const ordenador = (tarefas, ordenador) => {
  switch (ordenador) {
    case MOSTRA_RECENTES:
      return orderBy(tarefas, 'data_criacao', 'asc');
    case MOSTRA_ANTIGAS:
      return orderBy(tarefas, 'data_criacao', 'desc');
  }
};