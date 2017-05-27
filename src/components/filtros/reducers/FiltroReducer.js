import {
  MOSTRA_TODAS,
  SET_VISIBILIDADE_FILTRO
} from '../actions/types';

export default (state = MOSTRA_TODAS, action) => {
  switch (action.type) {
    case SET_VISIBILIDADE_FILTRO:
      return action.payload;
    default:
      return state;
  }
};