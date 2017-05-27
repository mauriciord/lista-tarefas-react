import {
  SET_VISIBILIDADE_FILTRO
} from './types';

export const filtrar = (filtro) => {
  return {
    type: SET_VISIBILIDADE_FILTRO,
    payload: filtro
  }
};