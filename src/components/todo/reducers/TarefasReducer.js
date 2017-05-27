import { v4 } from 'node-uuid';
import moment from 'moment';

import {
  ADD_TAREFA,
  TOGGLE_TAREFA,
  MOSTRA_TODAS,
  MOSTRA_FINALIZADAS,
  MOSTRA_ATIVAS
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case ADD_TAREFA:
      const texto = action.payload;
      return [ 
        ...state, 
        {
          id: v4(),
          texto,
          finalizada: false,
          data_criacao: moment()
        }
      ];
    case TOGGLE_TAREFA:
      return state.map( tarefa => {
        if ( tarefa.id !== action.payload ) {
          return tarefa;
        }

        return {
          ...tarefa,
          finalizada: !tarefa.finalizada
        };
      });
    default:
      return state;
  }
 
};