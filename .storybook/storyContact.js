import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Contact from '../src/Contact';

import './normalize.css';

storiesOf('Client', module)
	.add('default', () => (
    <div style={{width: '915px'}}>
      <Contact />
    </div>
  ))
  