import {
  MOSTRA_RECENTES,
  SET_VISIBILIDADE_ORDEM
} from '../actions/types';

export default (state = MOSTRA_RECENTES, action) => {
  switch (action.type) {
    case SET_VISIBILIDADE_ORDEM:
      return action.payload;
    default:
      return state;
  }
};