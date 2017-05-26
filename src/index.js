import React from 'react';
import { render } from 'react-dom';

// AppContainer é um wrapper do HMR
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#app'),
  );
};

renderApp(App);

// HMR api
if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    renderApp(App);
  });
}