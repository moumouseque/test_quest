import React from 'react';
import {configure, addDecorator} from '@kadira/storybook';
import Styletron from 'styletron-client';
import {StyletronProvider} from 'styletron-react';

const styletron = new Styletron();
addDecorator((getStory) => (
  <StyletronProvider styletron={styletron}>{getStory()}</StyletronProvider>
));

const req = require.context('./', true, /story/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);