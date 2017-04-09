import React from 'react';
import {configure, addDecorator} from '@kadira/storybook';
import Styletron from 'styletron-client';
import {StyletronProvider} from 'styletron-react';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';

const styletron = new Styletron();

const store = configureStore();

addDecorator((getStory) => (
  <StyletronProvider styletron={styletron}>
    <Provider store={store}>
      {getStory()}
    </Provider>
  </StyletronProvider>
));

const req = require.context('./', true, /story/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
