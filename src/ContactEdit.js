import React, { Component } from 'react';
import { styled } from 'styletron-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ClientActions from './actions/ClientActions';
import UiSelect from './ui/UiSelect';

const StyledContactEdit = styled('div', (props) => ({
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: '2',
  display: props.isOpen ? 'block' : 'none',
  padding: '35px 35px 30px 35px',
  width: '379px',
  backgroundColor: '#ffffff',
  border: '1px solid #e2e2e2',
  borderRadius: '2px',
  cursor: 'default'
}));

const ModalTitle = styled('h2', {
  marginTop: '0',
  marginBottom: '40px',
  padding: '0',
  fontSize: '18px',
  lineHeight: '21px',
  fontWeight: '400'
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

const CheckBoxBlock = styled('div', {
  marginBottom: '30px',
  paddingLeft: '141px'
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

const DealStatus = styled('div', {
  width: '132px'
});

const ContactStatus = styled('div', {
  width: '129px'
});

const PhonesRow = styled('div', {
  display: 'flex',
  marginTop: '40px',
  marginBottom: '20px',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#323232'
});

const PhonesRowTitle = styled('span', {
  display: 'inline-block',
  paddingTop: '7px',
  width: '141px',
  verticalAlign: 'top'
});

const PhoneInput = styled('input', {
  boxSizing: 'border-box',
  marginRight: '8px',
  marginBottom: '10px',
  padding: '6px 9px',
  width: '138px',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: '1px solid #d2d2d2',
  outline: 'none'
});

const DeletePhone = styled('span', {
  display: 'inline-block',
  width: '9px',
  height: '9px',
  background: 'no-repeat center',
  backgroundImage: 'url("data:image/svg+xml,' +
  '<svg xmlns=\'http://www.w3.org/2000/svg\'>' +
  '<g stroke=\'%23979797\' stroke-width=\'1\'>' +
      '<line x1=\'0\' y1=\'0\' x2=\'9\' y2=\'9\' />' +
      '<line x1=\'0\' y1=\'9\' x2=\'9\' y2=\'0\' />' +
  '</g>' +
  '</svg>")',
  cursor: 'pointer'
});

const AddPhone = styled('span', {
  fontSize: '12px',
  lineHeight: '14px',
  color: '#878787',
  cursor: 'pointer'
});

const FormButton = styled('button', {
  marginTop: '60px',
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

class ContactEdit extends Component {
  constructor(props){
    super(props);
    this.client = {};
    this.props.clients.forEach(client => {
      if (client.id === this.props.clientId) {
        this.client = client;
      }
    });

    const [
      firstName,
      middleName,
      lastName
    ] = this.client.name.split(' ');

    this.state={
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      dealStatus: this.client.dealStatus,
      status: this.client.status,
      phones: this.client.phones,
      broker: this.client.broker,
      email: this.client.email
    };

    //remove 'Документ' from labels of dealStatuses
    this.dealStatuses = this.props.dealStatuses.map( status => {
      let newLabel = status.label.split(' ').splice(1).join(' ');

      newLabel = newLabel[0].toUpperCase() + newLabel.slice(1);

      return { ...status, label: newLabel };
    });

    this.clientStatuses = this.props.clientStatuses;
  }

  addPhoneField() {
    this.setState({
      phones: this.state.phones.concat([''])
    })
  }

  removePhoneField(id){
    this.setState({
      phones: this.state.phones.filter( (phone, index) => index !== id )
    })
  }

  formatingPhone(phone, id) {
    if (phone.length > 16 ) return this.state.phones[id];
    let newPhone = phone.length < 4 ? '+7 ' : phone;
    newPhone = [6, 10, 13].indexOf(newPhone.length) > -1 && newPhone.length > this.state.phones[id].length ? newPhone + ' ' : newPhone;
    return newPhone;
  }

  handlePhoneInputChange(id, event) {
    let newPhone = event.target.value;
    newPhone = this.formatingPhone(newPhone, id)
    this.setState({
      phones: this.state.phones.map( (phone, index) => (index === id ? newPhone : phone))
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const data = {
      name: `${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`,
      type: "Продавец",
      phones: this.state.phones,
      broker: this.state.broker,
      updateDate: (new Date()).toLocaleString('ru', { month: 'long',day: 'numeric'}),
      status: this.state.status,
      dealStatus: this.state.dealStatus,
      email: this.state.email
    }
    this.props.fetchEditClient(this.client.id, data);
    this.props.onClose();
  }

  statusChange(data) {
    this.setState({
      status: data.value
    });
  }

  dealStatusChange(data) {
    this.setState({
      dealStatus: data.value
    });
  }

  inputChange(name, event) {
    this.setState(
      (JSON.parse(`{"${name}": "${event.target.value}"}`))
    )
  }

  render() {
    return (
      <StyledContactEdit isOpen={this.props.isOpen}>
        <ModalTitle>Контакт</ModalTitle>
        <CloseModalButton
          onClick={this.props.onClose.bind(this)}
        />
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <FormRow>
            <FieldName>Фамилия</FieldName>
            <FormInput
              name='lastName'
              defaultValue={this.state.lastName}
              onChange={this.inputChange.bind(this, 'lastName')}
            />
          </FormRow>
          <FormRow>
            <FieldName>Имя</FieldName>
            <FormInput
              name='firstName'
              defaultValue={this.state.firstName}
              onChange={this.inputChange.bind(this, 'firstName')}
            />
          </FormRow>
          <FormRow style={{marginBottom: '10px'}}>
            <FieldName>Отчество</FieldName>
            <FormInput
              name='middleName'
              defaultValue={this.state.middleName}
              onChange={this.inputChange.bind(this, 'middleName')}
            />
          </FormRow>
          <CheckBoxBlock>
            <CheckBoxLabel>
              <CheckBoxInput
                type='checkbox'
                name='isAgent'
                className='styledCheckbox'
              />
              <CheckBoxLabelText>Клиент является агентом</CheckBoxLabelText>
            </CheckBoxLabel>
          </CheckBoxBlock>
          <FormRow>
            <FieldName>Договор</FieldName>
            <DealStatus>
              <UiSelect
                name='dealStatus'
                onChange={this.dealStatusChange.bind(this)}
                value={this.state.dealStatus}
                options={this.dealStatuses}
              />
            </DealStatus>
          </FormRow>
          <FormRow>
            <FieldName>Статус</FieldName>
            <ContactStatus>
              <UiSelect
                name='status'
                onChange={this.statusChange.bind(this)}
                value={this.state.status}
                options={this.clientStatuses}
              />
            </ContactStatus>
          </FormRow>
          <FormRow>
            <FieldName>Cотрудник</FieldName>
            <FormInput
              name='broker'
              placeholder='Фамилия или телефон'
              defaultValue={this.state.broker}
              onChange={this.inputChange.bind(this, 'broker')}
            />
          </FormRow>
          <PhonesRow>
            <PhonesRowTitle>Телефоны</PhonesRowTitle>
            <div>
              {this.state.phones.map((phone, index) => {
                return (
                  <div key={index}>
                    <PhoneInput
                      maxlength='16'
                      value={phone}
                      name={`phone${index}`}
                      onChange={this.handlePhoneInputChange.bind(this, index)}
                    />
                    {index > 0 &&
                      <DeletePhone onClick={this.removePhoneField.bind(this, index)}/>
                    }
                  </div>
                )
              })}
              <AddPhone onClick={this.addPhoneField.bind(this)}>Добавить еще номер</AddPhone>
            </div>
          </PhonesRow>
          <FormRow>
            <FieldName>Эл. почта</FieldName>
            <FormInput
              name='email'
              defaultValue={this.state.email}
              onChange={this.inputChange.bind(this, 'email')}
            />
          </FormRow>
          <FormButton>Сохранить контакт</FormButton>
        </form>
      </StyledContactEdit>
    )
  }
}

function mapStateToProps(state) {
  return {
    clients: state.clients.clientShow,
    clientStatuses: state.clientStatuses.clientStatusesList,
    dealStatuses: state.dealStatuses.dealStatusesList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...ClientActions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);
