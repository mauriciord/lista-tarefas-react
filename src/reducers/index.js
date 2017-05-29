import { combineReducers } from 'redux';
import TarefasReducer from '../components/todo/reducers/TarefasReducer';
import FiltroReducer from '../components/filtros/reducers/FiltroReducer';
import OrdenacaoReducer from '../components/filtros/reducers/OrdenacaoReducer';

export default combineReducers({
  tarefas: TarefasReducer,
  filtroVisib: FiltroReducer,
  ordenacaoVisib: OrdenacaoReducer
});