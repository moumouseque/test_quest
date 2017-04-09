import React from 'react';
import ReactDOM from 'react-dom';
import Styletron from 'styletron-client';
import {StyletronProvider} from 'styletron-react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';

import './index.css';

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet]);

const store = configureStore();

ReactDOM.render(
  <StyletronProvider styletron={styletron}>
    <Provider store={store}>
      <App />
    </Provider>
  </StyletronProvider>,
  document.getElementById('root')
);
