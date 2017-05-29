import orderBy from 'lodash/orderBy';
import {
  MOSTRA_TODAS,
  MOSTRA_FINALIZADAS,
  MOSTRA_ATIVAS,
} from '../actions/types';

export const filtroDeTarefas = (tarefas, filtroVisibilidade) => {
  switch (filtroVisibilidade) {
    case MOSTRA_TODAS:
      return tarefas;
    case MOSTRA_FINALIZADAS:
      return tarefas.filter(t => t.finalizada);
    case MOSTRA_ATIVAS:
      return tarefas.filter(t => !t.finalizada);
  }
};