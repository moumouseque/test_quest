import React, { Component } from 'react';
import { styled } from 'styletron-react';

const StyledProfileStub = styled('div', {
  marginBottom: '0'
});

const ProfileTitle = styled('h2', {
  marginTop: '0',
  marginBottom: '15px',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '500',
  color: '#323232'
});

const StyledStub = styled('div', {
  padding: '55px 0',
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#fbfbfb'
});

const StubTip = styled('p', {
  margin: '0',
  marginBottom: '10px',
  fontSize: '12px',
  lineHeight: '14px',
  fontWeight: '400',
  color: '#606060',
  whiteSpace: 'pre-line'
});

const StubBtn = styled('button', {
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

class ProfileStub extends Component {
  render() {
    return (
      <StyledProfileStub>
        <ProfileTitle>Анкета клиента</ProfileTitle>
        <StyledStub>
          <StubTip>{'Узнайте мотивацию клиента\nприобретения жилья'}</StubTip>
          <StubBtn>Провести анкетирование</StubBtn>
        </StyledStub>
      </StyledProfileStub>
    )
  }
}

export default ProfileStub
