import { 
  ADD_TAREFA,
  TOGGLE_TAREFA
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