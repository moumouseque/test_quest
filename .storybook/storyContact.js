import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ContactEdit from '../src/ContactEdit';
import AddActivity from '../src/AddActivity';
import App from '../src/App';

import './normalize.css';

storiesOf('Client', module)
	.add('default', () => (
    <div style={{width: '915px'}}>
      <App />
    </div>
  ))
  .add('edit', () => (
    <div style={{width: '915px'}}>
      <ContactEdit />
    </div>
  ))
  .add('addActivity', () => (
    <div style={{width: '915px'}}>
      <AddActivity />
    </div>
  ))
  