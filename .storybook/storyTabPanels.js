import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ProfileNote from '../src/ProfileNote';
import ProfileNoteStub from '../src/ProfileNoteStub';
import ProfileConclusion from '../src/ProfileConclusion';
import ProfileStub from '../src/ProfileStub';
import ProfileEditNote from '../src/ProfileEditNote';
import Mortgage from '../src/Mortgage';
import ContactActivity from '../src/ContactActivity';
import ContactSearches from '../src/ContactSearches';
import ContactPremises from '../src/ContactPremises';

import './normalize.css';
import './style.css';

storiesOf('TabPanels', module)
  .add('ProfileNote', () => (
    <div className='tab-panel'>
      <ProfileNote />
    </div>
  ))
  .add('ProfileNoteStub', () => (
    <div className='tab-panel'>
      <ProfileNoteStub />
    </div>
  ))
  .add('ProfileConclusion', () => (
    <div className='tab-panel'>
      <ProfileConclusion />
    </div>
  ))
  .add('ProfileStub', () => (
    <div className='tab-panel'>
      <ProfileStub />
    </div>
  ))
  .add('ProfileEditNote', () => (
    <div className='tab-panel'>
      <ProfileEditNote />
    </div>
  ))
  .add('Mortgage', () => (
    <div className='tab-panel'>
      <Mortgage />
    </div>
  ))
  .add('ContactActivity', () => (
    <div className='tab-panel'>
      <ContactActivity />
    </div>
  ))
  .add('ContactPremises', () => (
    <div className='tab-panel'>
      <ContactPremises />
    </div>
  ))
  .add('ContactSearches', () => (
    <div className='tab-panel'>
      <ContactSearches />
    </div>
  ))