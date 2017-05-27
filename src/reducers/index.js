import { combineReducers } from 'redux';
import TarefasReducer from '../components/todo/reducers/TarefasReducer';
import FiltroReducer from '../components/filtros/reducers/FiltroReducer';

export default combineReducers({
  tarefas: TarefasReducer,
  filtroVisib: FiltroReducer
});