import React, { Component } from 'react';
import {styled} from 'styletron-react';
import DetailsArea from './DetailsArea';
import ContactEdit from './ContactEdit';
import AddActivity from './AddActivity';
import { addIconMini, downloadIcon, editIcon, selectBlackArrow, selectWhiteArrow } from './SvgImages';
import UiSelect from './ui/UiSelect';

const ContactWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
});

const ContactCheckBox = styled('div', {
  marginRight: '6px',
  flex: '0 0 14px',
  height: '14px',
  border: '1px solid #878787',
  borderRadius: '2px'
});

const StyledContact = styled('div', {
  position: 'relative',
  flex: '0 0 876px',
  border: 'solid 1px #e2e2e2',
  padding: '10px 19px 20px 18px',
  color: '#323232'
});

const TopRow = styled('div', {
  display: 'flex',
  marginBottom: '29px',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px'
});

const TopInfo = styled('div', {
  display: 'flex',
  alignItems: 'center'
});

const DealStatus = styled('div', {
  width: '104px',
  marginRight: '10px'
});

const ContractStatus = styled('div', {
  width: '154px',
  marginRight: '10px'
});

const ContactMenu = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '0',
  listStyle: 'none'
});

const ContactMenuItem = styled('li',{
  marginRight: '6px',
  padding: '3px 4px',
  borderRadius: '2px',
  backgroundColor: '#f5f5f5'
});

const ContactActions = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const ContactAddAction = styled('a', {
  position: 'relative',
  padding: '5px 9px 5px 26px',
  borderRadius: '2px',
  border: 'solid 1px #d2d2d2',
  cursor: 'pointer',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '5px',
    left: '7px',
    width: '14px',
    height: '14px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '14px 14px',
    backgroundImage: `url(${addIconMini})`,
  }
});

const ContactActionDownload = styled('a', {
  display: 'block',
  marginLeft: '16px',
  width: '18px',
  height: '18px',
  background: 'no-repeat 50% 50%',
  backgroundSize: '18px 18px',
  backgroundImage: `url(${downloadIcon})`,
  cursor: 'pointer'
});

const ContactActionEdit = styled('a', {
  display: 'block',
  marginLeft: '12px',
  width: '18px',
  height: '18px',
  background: 'no-repeat 50% 50%',
  backgroundSize: '18px 18px',
  backgroundImage: `url(${editIcon})`,
  cursor: 'pointer'
});

const AbbreviatedName = styled('p', {
  marginBottom: '8px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '19px'
});

const FullName = styled('p', {
  marginTop: '0',
  marginBottom: '28px',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#606060'
});

const BottomRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end'
});

const Contacts = styled('div', {
  display: 'flex'
});

const ContactsItem = styled('div', {
  position: 'relative',
  paddingRight: '25px'
});

const ContactsTitle = styled('span', {
  fontSize: '12px',
  lineHeight: '14px',
  fontWeight: '400',
  color: '#bcbcbc'
});

const ContactsShowAll = styled('a', {
  marginLeft: '5px',
  fontSize: '12px',
  lineHeight: '14px',
  fontWeight: '400',
  color: '#315efb',
  cursor: 'pointer'
});

const ContactsContent = styled('p', {
  marginTop: '9px',
  marginBottom: '0',
  fontSize: '15px',
  lineHeight: '18px',
  fontWeight: '400'
});

const AllPhones = styled('div', (props) => ({
  position: 'absolute',
  top: '17px',
  left: '-10px',
  display: props.open ? 'block' : 'none',
  padding: '0 9px 9px 9px',
  backgroundColor: '#fff',
  border: '1px solid #e1e1e1',
  borderRadius: '2px'
}));

const Info = styled('div', {
  fontSize: '12px',
  lineHeight: '14px',
  fontWeight: '400'
});

const InfoFrom = styled('span', {
  display: 'inline-block',
  marginRight: '16px',
  padding: '3px 4px',
  borderRadius: '2px',
  backgroundColor: '#f5f5f5'
});

const InfoUpdateDate = styled('span', {
  marginRight: '15px',
  color: '#bcbcbc'
});

const InfoDetail = styled('a', (props) => ({
  position: 'relative',
  display: 'inline-block',
  padding: '4px 25px 4px 8px',
  color: props.expanded ? '#ffffff' : '#323232',
  border: props.expanded ? '1px solid #315efb' : '1px solid #d2d2d2',
  borderRadius: '2px',
  backgroundColor: props.expanded ? '#315efb' : '#ffffff',
  cursor: 'pointer',
  '::after': {
    position: 'absolute',
    content: '""',
    top: '10px',
    left: '77px',
    width: '9px',
    height: '5px',
    backgroundSize: '9px 5px',
    backgroundImage: props.expanded ? `url(${selectWhiteArrow})` : `url(${selectBlackArrow})`
  }
}));

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      detailedArea: {
        expanded: false
      },
      editIsOpen: false,
      addActivityIsOpen: false,
      AllPhones: false
    };
  }

  toggleDetailedArea() {
    this.setState({
      detailedArea: {
        expanded: !this.state.detailedArea.expanded
      }
    })
  }

  openEdit() {
    this.setState({editIsOpen: true});
  }

  closeEdit() {
    this.setState({editIsOpen: false});
  }

  openAddActivity() {
    this.setState({addActivityIsOpen: true});
  }

  closeAddActivity() {
    this.setState({addActivityIsOpen: false});
  }

  toAbbreviatedName(name) {
    return (
      name.split(' ')
      .map((word, index) => {
        return (
          index !== 2 ? word.slice(0, 1).concat('.') : word
        )
      })
      .join(' ')
    )
  }

  allPhonesOpen() {
    this.setState({
      allPhonesOpen: !this.state.allPhonesOpen
    })
  }

  render() {
    return (
      <ContactWrapper>
        <ContactCheckBox />
        <StyledContact>
          <TopRow>
            <TopInfo>
              <DealStatus>
                {this.props.client.status && (this.props.clientStatuses.length !== 0) &&
                <UiSelect 
                  little={true}
                  value={this.props.client.status}
                  options={this.props.clientStatuses}
                />
                }
              </DealStatus>
              <ContractStatus>
                {this.props.client.dealStatus && (this.props.dealStatuses.length !== 0) &&
                <UiSelect 
                  little={true}
                  value={this.props.client.dealStatus}
                  options={this.props.dealStatuses}
                />
                }
              </ContractStatus>
              <ContactMenu>
                <ContactMenuItem>Продавец</ContactMenuItem>
                <ContactMenuItem>Покупатель</ContactMenuItem>
                <ContactMenuItem>Арендодатель</ContactMenuItem>
                <ContactMenuItem>Арендатор</ContactMenuItem>
              </ContactMenu>
            </TopInfo>
            <ContactActions>
              <ContactAddAction onClick={this.openAddActivity.bind(this)} >
                Действие
              </ContactAddAction>
              {this.state.addActivityIsOpen && <AddActivity
                isOpen={this.state.addActivityIsOpen}
                onClose={this.closeAddActivity.bind(this)}
              />}
              <ContactActionDownload />
              <ContactActionEdit onClick={this.openEdit.bind(this)} />
              {this.state.editIsOpen && <ContactEdit
                clientId={this.props.client.id}
                isOpen={this.state.editIsOpen}
                onClose={this.closeEdit.bind(this)}
              />}
            </ContactActions>
          </TopRow>
          <AbbreviatedName>{this.props.client.name && this.toAbbreviatedName(this.props.client.name)}</AbbreviatedName>
          <FullName>{this.props.client.name}</FullName>
          <BottomRow>
            <Contacts>
              <ContactsItem>
                <ContactsTitle>Телефон</ContactsTitle>
                <ContactsShowAll
                  onClick={this.allPhonesOpen.bind(this)}
                >
                  показать все
                </ContactsShowAll>
                <ContactsContent>{this.props.client.phones && this.props.client.phones[0]}</ContactsContent>
                {this.props.client.phones &&
                  <AllPhones
                    open={this.state.allPhonesOpen}
                    onMouseLeave={this.allPhonesOpen.bind(this)}
                  >
                    {this.props.client.phones.map((phone, index) => (
                      <ContactsContent key={index}>{phone}</ContactsContent>
                    ))}
                  </AllPhones>
                }
              </ContactsItem>
              <ContactsItem>
                <ContactsTitle>Эл. почта</ContactsTitle>
                <ContactsContent>{this.props.client.email}</ContactsContent>
              </ContactsItem>
              <ContactsItem>
                <ContactsTitle>Сотрудник</ContactsTitle>
                <ContactsContent>{this.props.client.broker}</ContactsContent>
              </ContactsItem>
            </Contacts>
            <Info>
              <InfoFrom>Из лида</InfoFrom>
              <InfoUpdateDate>Обновлен {this.props.client.updateDate}</InfoUpdateDate>
              <InfoDetail
                onClick={this.toggleDetailedArea.bind(this)}
                expanded={this.state.detailedArea.expanded}
              >
                Подробнее
              </InfoDetail>
            </Info>
          </BottomRow>
          <DetailsArea
            expanded={this.state.detailedArea.expanded}
            toggleDetailedArea={this.toggleDetailedArea.bind(this)}
          />
        </StyledContact>
      </ContactWrapper>
    )
  }
}

export default Contact;
