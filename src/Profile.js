import React, { Component } from 'react';
import { styled } from 'styletron-react';

import ProfileNote from './ProfileNote';
import ProfileNoteStub from './ProfileNoteStub';
import ProfileConclusion from './ProfileConclusion';
import ProfileStub from './ProfileStub';
import ProfileEditNote from './ProfileEditNote';

const StyledProfile = styled('div', {
  padding: '20px 20px 30px 20px'
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteMode: 'show',
      profile: true
    }
  }

  render() {
    let note;
    if (this.state.noteMode === 'show'){
      note = <ProfileNote />;
    } else if (this.state.noteMode === 'edit') {
      note = <ProfileEditNote />;
    } else if (this.state.noteMode === 'stub') {
      note = <ProfileNoteStub />;
    }

    return (
      <StyledProfile>
        { note }
        { this.state.profile ?
          <ProfileConclusion /> :
          <ProfileStub />
        }
      </StyledProfile>
    )
  }
}

export default Profile
