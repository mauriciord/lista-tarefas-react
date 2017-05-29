import { 
  ADD_TAREFA,
  TOGGLE_TAREFA,
  DEL_TAREFA
} from './types'; 

export const addTarefa = (texto) => {
  return {
    type: ADD_TAREFA,
    payload: texto
  }
};

export const toggleTarefa = (id) => {
  return {
    type: TOGGLE_TAREFA,
    payload: id
  }
};

export const delTarefa = (id) => {
  return {
    type: DEL_TAREFA,
    payload: id
  }
};