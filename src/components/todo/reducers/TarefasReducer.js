import { v4 } from 'node-uuid';
import moment from 'moment';

import {
  ADD_TAREFA,
  TOGGLE_TAREFA,
  DEL_TAREFA
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
          data_criacao: moment().toDate()
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
    case DEL_TAREFA:
      const indice = state.findIndex( x => x.id === action.payload );
      return [
        ...state.slice(0, indice),
        ...state.slice(indice + 1)
      ];
    default:
      return state;
  }
 
};