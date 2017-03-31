import React, { Component } from 'react';
import { styled } from 'styletron-react';

const StyledProfileEditNote = styled('div', {
  position: 'relative',
  width: '100%'
});

const ProfileTitle = styled('h2', {
  marginTop: '0',
  marginBottom: '15px',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '500',
  color: '#323232'
});

const BtnBlock = styled('div', {
  position: 'absolute',
  right: '0',
  top: '0'
});

const CancelBtn = styled('a', {
  marginRight: '10px',
  padding: '6px 15px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#000000',
  backgroundColor: '#ffffff',
  border: 'solid 1px #d2d2d2',
  borderRadius: '2px',
  cursor: 'pointer'
});

const SaveBtn = styled('a', {
  padding: '6px 15px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#ffffff',
  backgroundColor: '#315efb',
  border: 'solid 1px #315efb',
  borderRadius: '2px',
  cursor: 'pointer'
});

const StyledTextarea = styled('textarea', {
  boxSizing: 'border-box',
  width: '100%',
  height: '178px',
  fontFamily: 'inherit',
  border: '1px solid #d2d2d2',
  resize: 'none',
  outline: 'none'
});

class ProfileEditNote extends Component {
  render() {
    return (
      <StyledProfileEditNote>
        <ProfileTitle>Заметка о клиенте</ProfileTitle>
        <BtnBlock>
          <CancelBtn>Отмена</CancelBtn>
          <SaveBtn>Сохранить</SaveBtn>
        </BtnBlock>
        <StyledTextarea />
      </StyledProfileEditNote>
    )
  }
}

export default ProfileEditNote;
