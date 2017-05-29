import {
  SET_VISIBILIDADE_FILTRO,
  SET_VISIBILIDADE_ORDEM
} from './types';

export const filtrar = (filtro) => {
  return {
    type: SET_VISIBILIDADE_FILTRO,
    payload: filtro
  }
};

export const ordenar = (ordenador) => {
  return {
    type: SET_VISIBILIDADE_ORDEM,
    payload: ordenador
  }
};