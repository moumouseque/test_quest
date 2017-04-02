import React, { Component } from 'react';
import { styled } from 'styletron-react';
import { addIcon, editIcon, deleteIcon } from './SvgImages';

const  StyledClientPremisees = styled('div', {
  paddingTop: '16px'
});

const TabTitleRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '32px',
  padding: '0 20px'
});

const TabTitle = styled('h2', {
  margin: '0',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '500'
});

const TabAddBtn = styled('a', {
  padding: '7px 15px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#4a4a4a',
  border: 'solid 1px #e2e2e2',
  borderRadius: '2px',
  cursor: 'pointer'
});

const PremiseFilter = styled('ul', {
  display: 'flex',
  margin: '0',
  paddingLeft: '20px',
  listStyle: 'none'
});

const PremiseFilterItem = styled('li', (props) => ({
  marginRight: '30px',
  paddingBottom: '14px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: props.active ? '#323232' : '#878787',
  borderBottom: '3px solid',
  borderBottomColor: props.active ? '#315efb' : '#ffffff'
}));

const PremiseFilterCount = styled('span', {
  marginLeft: '5px',
  padding: '1px 4px',
  fontSize: '13px',
  lineHeight: '15px',
  backgroundColor: '#f5f5f5',
  borderRadius: '2px'
});

const PremiseList = styled('table', {
  marginBottom: '30px',
  width: '100%',
  fontSize: '13px',
  lineHeight: '15px',
  fontWeight: '400',
  color: '#323232',
  borderCollapse: 'collapse',
  backgroundColor: '#fdfdfd'
});

const Premise = styled('tr', {
  border: 'solid #e2e2e2',
  borderWidth: '1px 0 1px 0'
});

const PremiseName = styled('td', {
  padding: '15px 0 15px 20px',
  width: '190px',
  textAlign: 'left'
});

const PremiseResult = styled('td', {
  textAlign: 'left'
});

const PremiseIcons = styled('td', {
  paddingRight: '20px',
  textAlign: 'right'
});

const AddIcon = styled('a', {
  display: 'inline-block',
  marginLeft: '13px',
  width: '18px',
  height: '18px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '18px 18px',
  backgroundImage: `url(${addIcon})`,
  cursor: 'pointer'
});

const EditIcon = styled('a', {
  display: 'inline-block',
  marginLeft: '13px',
  width: '18px',
  height: '18px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '18px 18px',
  backgroundImage: `url(${editIcon})`,
  cursor: 'pointer'
});

const DeleteIcon = styled('a', {
  display: 'inline-block',
  marginLeft: '13px',
  width: '18px',
  height: '18px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '18px 18px',
  backgroundImage: `url(${deleteIcon})`,
  cursor: 'pointer'
});

class ClientPremisees extends Component {
  render() {
    return (
      <StyledClientPremisees>
        <TabTitleRow>
          <TabTitle>Объекты клиента</TabTitle>
          <TabAddBtn>Добавить объект</TabAddBtn>
        </TabTitleRow>
        <PremiseFilter>
          <PremiseFilterItem active>
            Добавлены
            <PremiseFilterCount>1</PremiseFilterCount>
          </PremiseFilterItem>
          <PremiseFilterItem>
            Архив
            <PremiseFilterCount>0</PremiseFilterCount>
          </PremiseFilterItem>
        </PremiseFilter>
        <PremiseList>
          <tbody>
            <Premise>
              <PremiseName>2-комнатная квартира</PremiseName>
              <PremiseResult>г. Москва, улица Ленина 34, дом 35…</PremiseResult>
              <PremiseIcons>
                <AddIcon />
                <EditIcon />
                <DeleteIcon />
              </PremiseIcons>
            </Premise>
          </tbody>
        </PremiseList>
      </StyledClientPremisees>
    )
  }
}

export default ClientPremisees
