import {
  ADD_TAREFA,
  TOGGLE_TAREFA
} from './types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case ADD_TAREFA:
      const { id, texto, data_criacao } = action.payload;
      return [ 
        ...state, 
        {
          id,
          texto,
          finalizada: false,
          data_criacao
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