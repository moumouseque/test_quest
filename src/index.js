import React from 'react';
import ReactDOM from 'react-dom';
import Styletron from 'styletron-client';
import {StyletronProvider} from 'styletron-react';
import App from './App';

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet]);

ReactDOM.render(
  <StyletronProvider styletron={styletron}>
    <App />
  </StyletronProvider>,
  document.getElementById('root')
);
