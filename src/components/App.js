import React from 'react';
import styles from './App.scss';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

import TarefasApp from './todo/components/TarefasApp';

const store = createStore(
  reducers
);

const App = (props) => (
  <Provider store={store}>
    <TarefasApp />
  </Provider>
);

export default App;