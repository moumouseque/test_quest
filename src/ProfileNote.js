import React, { Component } from 'react';
import { styled } from 'styletron-react';
import { editIcon } from './SvgImages';

const StyledProfileNote = styled('div', {
  marginBottom: '25px'
})

const ProfileTitleBlock = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '15px'
});

const ProfileTitle = styled('h2', {
  margin: '0',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '500',
  color: '#323232'
});

const EditIcon = styled('a', {
  display: 'block',
  width: '18px',
  height: '18px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '18px 18px',
  backgroundImage: `url(${editIcon})`,
  cursor: 'pointer'
});

const AboutClient = styled('p', {
  margin: '0',
  marginBottom: '25px',
  paddingBottom: '25px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#000000',
  borderBottom: '1px solid #d8d8d8'
});

class ProfileNote extends Component {
  render() {
    return (
      <StyledProfileNote>
        <ProfileTitleBlock>
          <ProfileTitle>Заметка о клиенте</ProfileTitle>
          <EditIcon />
        </ProfileTitleBlock>
				<AboutClient>Какой страшный клиент</AboutClient>
      </StyledProfileNote>
    )
  }
}

export default ProfileNote
