import React from 'react';
import { storiesOf } from '@kadira/storybook';

import DetailsArea from '../src/DetailsArea';

import './normalize.css';
import './style.css'

storiesOf('DetailsArea', module)
  .add('default', () => (
    <div className='details-area'>
      <DetailsArea
        expanded={true}
        toggleDetailedArea={() => {}}
      />
    </div>
  ))