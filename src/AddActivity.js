import React, { Component } from 'react';
import {styled} from 'styletron-react';
import MySelect from './ui/MySelect';
import AddActivityIncomingCall from './AddActivityIncomingCall';

const StyledAddActivity = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: '2',
  padding: '50px 0',
  width: '510px',
  backgroundColor: '#ffffff',
  border: '1px solid #e2e2e2',
  borderRadius: '2px'
});

const CloseModalButton = styled('a', {
  position: 'absolute',
  top: '9px',
  right: '9px',
  display: 'block',
  width: '16px',
  height: '16px',
  background: 'no-repeat center',
  backgroundImage: 'url("data:image/svg+xml,' +
  '<svg xmlns=\'http://www.w3.org/2000/svg\'>' +
  '<g stroke=\'%23979797\' stroke-width=\'1\'>' +
      '<line x1=\'0\' y1=\'0\' x2=\'16\' y2=\'16\' />' +
      '<line x1=\'0\' y1=\'16\' x2=\'16\' y2=\'0\' />' +
  '</g>' +
  '</svg>")',
  cursor: 'pointer'
});

const TopArea = styled('div', {
  paddingLeft: '65px'
});

const Title = styled('h2', {
  marginTop: '0',
  marginBottom: '31px',
  fontSize: '18px',
  lineHeight: '21px',
  fontWeight: '400',
  color: '#323232'
});

const PremiseType = styled('p', {
  marginTop: '0',
  marginBottom: '9px',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#878787'
});

const Premise = styled('p', {
  marginTop: '0',
  marginBottom: '29px',
  fontSize: '14px',
  lineHeight: '17px',
  color: '#323232'
});

const GreyAreaTop = styled('div', {
  padding: '20px 65px 0 65px',
  backgroundColor: '#f6f6f6',
  borderTop: '1px solid #e1e1e1',
});

const ActivitySelect = styled('div', {
  width: '380px',
});

const GreyAreaBottom = styled('div', {
  marginBottom: '57px',
  padding: '0 65px',
  height: '20px',
  backgroundColor: '#f6f6f6',
  borderBottom: '1px solid #e1e1e1'
});

const ActivityTipIcon = styled('div', {
  margin: '0px auto 15px auto',
  width: '40px',
  height: '41px',
  backgroundImage: 'url(img/addActivityIcon.png)'
});

const ActivityTipDescription = styled('p', {
  marginTop: '0',
  marginBottom: '69px',
  padding: '0 165px',
  fontSize: '14px',
  lineHeight: '16px',
  textAlign: 'center'
});

class AddActivity extends Component {
  constructor(props){
    super(props);
    this.state = {
      activitySelected: 0
    }
  }

  valueSelect(value) {
    this.setState({
      activitySelected: value
    })
  }

  render() {
    return(
      <StyledAddActivity>
        <CloseModalButton
          onClick={this.props.onClose.bind(this)}
        />
        <TopArea>
          <Title>Добавить действие</Title>
          <PremiseType>Объект</PremiseType>
          <Premise>1-комнатная квартира, 56 м²</Premise>
        </TopArea>
        <GreyAreaTop>
          <ActivitySelect>
            <MySelect
              valueSelect={this.valueSelect.bind(this)}
              options={[
                { value: 1, label: 'Входящий звонок', color: '#b0b0b0' },
                { value: 1, label: 'Исходящий звонок', color: '#eb8da5' }
              ]}
            />
          </ActivitySelect>
        </GreyAreaTop>
        { this.state.activitySelected === 0 &&
          <div>
            <GreyAreaBottom />
            <ActivityTipIcon />
            <ActivityTipDescription>
              Действия помогут вам вести учет и планирование
            </ActivityTipDescription>
          </div>
        }
        { this.state.activitySelected === 1 &&
          <div>
            <AddActivityIncomingCall />
          </div>
        }
        
      </StyledAddActivity>
    )
  }
}

export default AddActivity;
