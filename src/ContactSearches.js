import React, { Component } from 'react';
import { styled } from 'styletron-react';
import { addIcon, editIcon, deleteIcon } from './SvgImages';

const  StyledClientSearches = styled('div', {
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

const SearchFilter = styled('ul', {
  display: 'flex',
  margin: '0',
  paddingLeft: '20px',
  listStyle: 'none'
});

const SearchFilterItem = styled('li', (props) => ({
  marginRight: '30px',
  paddingBottom: '14px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: props.active ? '#323232' : '#878787',
  borderBottom: '3px solid',
  borderBottomColor: props.active ? '#315efb' : '#ffffff'
}));

const SearchFilterCount = styled('span', {
  marginLeft: '5px',
  padding: '1px 4px',
  fontSize: '13px',
  lineHeight: '15px',
  backgroundColor: '#f5f5f5',
  borderRadius: '2px'
});

const SearchList = styled('table', {
  marginBottom: '30px',
  width: '100%',
  fontSize: '13px',
  lineHeight: '15px',
  fontWeight: '400',
  color: '#323232',
  borderCollapse: 'collapse',
  backgroundColor: '#fdfdfd'
});

const Search = styled('tr', {
  border: 'solid #e2e2e2',
  borderWidth: '1px 0 1px 0'
});

const SearchName = styled('td', {
  padding: '15px 0 15px 20px',
  width: '190px',
  textAlign: 'left'
});

const SearchResult = styled('td', {
  textAlign: 'left'
});

const NewPremises = styled('a', {
  color: '#315efb'
});

const SearchIcons = styled('td', {
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

class ClientSearches extends Component {
  render() {
    return (
      <StyledClientSearches>
        <TabTitleRow>
          <TabTitle>Поиски клиента</TabTitle>
          <TabAddBtn>Добавить поиск</TabAddBtn>
        </TabTitleRow>
        <SearchFilter>
          <SearchFilterItem active>
            Добавлены
            <SearchFilterCount>1</SearchFilterCount>
          </SearchFilterItem>
          <SearchFilterItem>
            Архив
            <SearchFilterCount>0</SearchFilterCount>
          </SearchFilterItem>
        </SearchFilter>
        <SearchList>
          <tbody>
            <Search>
              <SearchName>Поиск квартиры в Москве</SearchName>
              <SearchResult>123 объектов</SearchResult>
              <SearchIcons>
                <AddIcon />
                <EditIcon />
                <DeleteIcon />
              </SearchIcons>
            </Search>
            <Search>
              <SearchName>Поиск квартиры в СПб</SearchName>
              <SearchResult>
                <NewPremises>Есть новые объекты</NewPremises>
              </SearchResult>
              <SearchIcons>
                <AddIcon />
                <EditIcon />
                <DeleteIcon />
              </SearchIcons>
            </Search>
          </tbody>
        </SearchList>
      </StyledClientSearches>
    )
  }
}

export default ClientSearches
