import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import './index.css';

export default App;

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = (Component) => {
    renderMethod(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root')
    );
  };

  render(App);

  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default));
  }
}
