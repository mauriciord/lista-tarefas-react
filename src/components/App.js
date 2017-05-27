import React from 'react';
import styles from './App.scss';
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash/throttle';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

import TarefasApp from './todo/components/TarefasApp';

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState
);

// aqui eu salvo na localStorage
store.subscribe(throttle(() => {
  saveState({
    tarefas: store.getState().tarefas
  });
}, 1000));

const App = (props) => (
  <Provider store={store}>
    <TarefasApp />
  </Provider>
);

export default App;