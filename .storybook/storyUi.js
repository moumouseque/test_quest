import React from 'react';
import { storiesOf } from '@kadira/storybook';

import UiSelect from '../src/ui/UiSelect';
import MySelect from '../src/ui/MySelect';

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
  .add('mySelect', () => (
    <div style={{width: '380px'}}>
      <MySelect 
        options={[
          { value: 'one', label: 'Входящий звонок', color: '#b0b0b0' },
          { value: 'two', label: 'Исходящий звонок', color: '#eb8da5' }
        ]}
      />
    </div>
  ))
