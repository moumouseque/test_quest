import React, { Component } from 'react';
import {styled} from 'styletron-react';
import UiSelect from './ui/UiSelect';

const StyledAddActivityIncomingCall = styled('div', {
  
});

const GrayArea = styled('div', {
  marginBottom: '25px',
  padding: '13px 110px 15px 65px',
  backgroundColor: '#f6f6f6',
  borderBottom: '1px solid #e1e1e1'
});

const ActivityTip = styled('p', {
  margin: '0',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#878787'
});

const CalendarLink = styled('a', {
  color: '#315efb',
  cursor: 'pointer'
});

const StyledForm = styled('form', {
  padding: '0 65px',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#323232'
});

const TopRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px'
});

const ActivityTitle = styled('h3', {
  margin: '0',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '500'
});

const CheckBoxLabel = styled('label', {
  display: 'flex'
});

const CheckBoxInput = styled('input', {
  width: '15px',
  height: '15px',
  border: '1px solid #cccccc',
  borderRadius: '2px',
  outline: 'none',
  appearance: 'none',
  ':checked': {
    borderColor: '#315efb',
    backgroundColor: '#315efb'
  }
});

const CheckBoxLabelText = styled('span', {
  marginLeft: '8px',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#323232'
});

const FormRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#323232'
});

const FieldName = styled('span', {
  width: '141px'
});

const FormInput = styled('input', {
  boxSizing: 'border-box',
  padding: '6px 9px',
  width: '240px',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: '1px solid #d2d2d2',
  outline: 'none'
});

const PhoneInput = styled('input', {
  position: 'relative',
  boxSizing: 'border-box',
  marginRight: '8px',
  marginBottom: '10px',
  padding: '6px 9px 6px 16px',
  width: '138px',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: '1px solid #d2d2d2',
  outline: 'none',
  '::before': {
    content: '+7',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'block',
    fontSize: '14px'
  }
});

const DateInputBlock = styled('div', {
  display: 'flex',
  alignItems: 'center'
});

const DateInput = styled('input', {
  boxSizing: 'border-box',
  marginRight: '12px',
  padding: '6px 9px',
  width: '138px',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: '1px solid #d2d2d2',
  outline: 'none'
});

const ClockInput = styled('div', {
  boxSizing: 'border-box',
  width: '40px'
});

const ClockArrows = styled('span', {
  display: 'block',
  width: '6px',
  height: '10px',
  background: 'no-repeat center',
  backgroundImage: 'url("data:image/svg+xml,' +
  '<svg xmlns=\'http://www.w3.org/2000/svg\'>' +
  '<g stroke=\'%23323232\' stroke-width=\'0.5\' fill=\'%23323232\'>' +
      '<polyline points=\' 0,4 3,0 5,4 \' />' +
      '<polyline points=\' 0,6 3,10 5,6 \' />' +
  '</g>' +
  '</svg>")', 
});

const Delimetr = styled('span', {
  margin: '0 3px'
});

const StyledTextArea = styled('textarea', {
  marginBottom: '30px',
  padding: '7px 10px',
  boxSizing: 'border-box',
  width: '100%',
  height: '146px',
  fontFamily: 'inherit',
  border: '1px solid #d2d2d2',
  resize: 'none',
  outline: 'none'
});

const FormButton = styled('button', {
  padding: '7px 13px 7px 17px',
  fontFamily: 'inherit',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#ffffff',
  backgroundColor: '#315efb',
  border: 'none',
  borderRadius: '2px'
});

class AddActivityIncomingCall extends Component {

  arrowRenderer() {
    return (
      <ClockArrows />
    )
  }

  render() {
    return (
      <StyledAddActivityIncomingCall>
        <GrayArea>
          <ActivityTip>
            Тут вы фиксируете звонки, которые к вам поступали. Зафиксированные звонки, отобразятся у вас
            <CalendarLink> в календаре.</CalendarLink>
          </ActivityTip>
        </GrayArea>
        <StyledForm>
          <TopRow>
            <ActivityTitle>Вам позвонил(а)</ActivityTitle>
            <CheckBoxLabel>
              <CheckBoxInput
                type='checkbox'
                className='styledCheckbox'
              />
              <CheckBoxLabelText>Создать клиента</CheckBoxLabelText>
            </CheckBoxLabel>
          </TopRow>
          <FormRow>
            <FieldName>Фамилия</FieldName>
            <FormInput />
          </FormRow>
          <FormRow>
            <FieldName>Имя</FieldName>
            <FormInput />
          </FormRow>
          <FormRow>
            <FieldName>Отчество</FieldName>
            <FormInput />
          </FormRow>
          <FormRow>
            <FieldName>Телефон</FieldName>
            <PhoneInput defaultValue='934 563 78 56'/>
          </FormRow>
          <FormRow>
            <FieldName>Дата и время</FieldName>
            <DateInputBlock>
              <DateInput />
              <ClockInput>
                <UiSelect
                  arrowRenderer={this.arrowRenderer}
                  value={10}
                  options={[
                    { value: 1, label: '01' },
                    { value: 2, label: '02' },
                    { value: 3, label: '03' },
                    { value: 4, label: '04' },
                    { value: 5, label: '05' },
                    { value: 6, label: '06' },
                    { value: 7, label: '07' },
                    { value: 8, label: '08' },
                    { value: 9, label: '09' },
                    { value: 10, label: '10' },
                  ]}
                />
              </ClockInput>
              <Delimetr>:</Delimetr>
              <ClockInput>
                <UiSelect
                  arrowRenderer={this.arrowRenderer}
                  value={10}
                  options={[
                    { value: 1, label: '01' },
                    { value: 2, label: '02' },
                    { value: 3, label: '03' },
                    { value: 4, label: '04' },
                    { value: 5, label: '05' },
                    { value: 6, label: '06' },
                    { value: 7, label: '07' },
                    { value: 8, label: '08' },
                    { value: 9, label: '09' },
                    { value: 10, label: '10' },
                  ]}
                />
              </ClockInput>
            </DateInputBlock>
          </FormRow>
          <StyledTextArea
            placeholder='Комментарий'
          />
          <FormButton>Добавить действие</FormButton>
        </StyledForm>
      </StyledAddActivityIncomingCall>
    )
  }
}

export default AddActivityIncomingCall;
