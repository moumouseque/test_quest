import React, { Component } from 'react';
import {styled} from 'styletron-react';
import DetailsArea from './DetailsArea';
import { addIconMini, downloadIcon, editIcon, selectBlackArrow, selectWhiteArrow } from './SvgImages';

const ContactWrapper = styled('div', {
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

const StyledSelect = styled('select', {
  marginRight: '10px',
  padding: '4px 21px 4px 8px',
  fontFamily: 'inherit',
  color: 'inherit',
  border: 'solid 1px #d2d2d2',
  borderRadius: '2px',
  background: 'no-repeat right 8px top 9px',
  backgroundColor: '#ffffff',
  backgroundSize: '9px 5px',
  backgroundImage: `url(${selectBlackArrow})`,
  appearance: 'none'
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
  display: 'flex',
  alignItems: 'center',
});

const ContactAction = styled('a', {
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
    this.state = { detailedArea: {
      expanded: false
    }}
  }

  toggleDetailedArea() {
    this.setState({
      detailedArea: {
        expanded: !this.state.detailedArea.expanded
      }
    })
  }

  render() {
    return (
      <ContactWrapper>
        <ContactCheckBox />
        <StyledContact>
          <TopRow>
            <TopInfo>
              <StyledSelect>
                <option>
                  Идет сделка
                </option>
              </StyledSelect>
              <StyledSelect>
                <option>
                  Договор не заключен
                </option>
              </StyledSelect>
              <ContactMenu>
                <ContactMenuItem>Продавец</ContactMenuItem>
                <ContactMenuItem>Покупатель</ContactMenuItem>
                <ContactMenuItem>Арендодатель</ContactMenuItem>
                <ContactMenuItem>Арендатор</ContactMenuItem>
              </ContactMenu>
            </TopInfo>
            <ContactActions>
              <ContactAction>Действие</ContactAction>
              <ContactActionDownload />
              <ContactActionEdit />
            </ContactActions>
          </TopRow>
          <AbbreviatedName>К. К. Константинопольский</AbbreviatedName>
          <FullName>Константин Константинополев Константинопольский</FullName>
          <BottomRow>
            <Contacts>
              <ContactsItem>
                <ContactsTitle>Телефон</ContactsTitle>
                <ContactsShowAll>показать все</ContactsShowAll>
                <ContactsContent>+7 953 344-34-43</ContactsContent>
              </ContactsItem>
              <ContactsItem>
                <ContactsTitle>Эл. почта</ContactsTitle>
                <ContactsContent>konstantinopolev@mail.ru</ContactsContent>
              </ContactsItem>
              <ContactsItem>
                <ContactsTitle>Сотрудник</ContactsTitle>
                <ContactsContent>К.К. Константинопольский</ContactsContent>
              </ContactsItem>
            </Contacts>
            <Info>
              <InfoFrom>Из лида</InfoFrom>
              <InfoUpdateDate>Обновлен 5 мая</InfoUpdateDate>
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
