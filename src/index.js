import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
);

if(module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp/>,
      rootEl
    )
  })
}
