import React from 'react';
import { storiesOf } from '@kadira/storybook';

import UiSelect from '../src/ui/UiSelect';

import './normalize.css';

storiesOf('Select', module)
	.add('little', () => (
    <div style={{width: '154px'}}>
      <UiSelect 
        little
        options={[
          { value: 'one', label: 'Договор не заключен' },
          { value: 'two', label: 'Договор заключен' }
        ]}
      />
    </div>
  ))
  .add('big', () => (
    <div style={{width: '200px'}}>
      <UiSelect 
        options={[
          { value: 'one', label: 'Договор не заключен' },
          { value: 'two', label: 'Договор заключен' }
        ]}
      />
    </div>
  ))