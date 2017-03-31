import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { styled } from 'styletron-react';

import Profile from './Profile';
import ContactActivity from './ContactActivity';
import ContactSearches from './ContactSearches';
import ContactPremises from './ContactPremises';
import Mortgage from './Mortgage';

Tabs.setUseDefaultStyles(false);

const StyledDetailsArea = styled('div', (props) => ({
  position: 'absolute',
  top: '194px',
  left: '-1px',
  display: props.expanded ? 'block' : 'none',
  paddingTop: '10px',
  width: '915px',
  boxShadow: '0 3px 7px 0 #ededed',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '4px',
    left: '815px',
    zIndex: '1',
    display: 'block',
    width: '11px',
    height: '11px',
    background: '#ffffff',
    borderTop: '1px solid #e2e2e2',
    borderLeft: '1px solid #e2e2e2',
    transform: 'rotate(45deg)'
  }
}));

const StyledTabs = styled(Tabs, {
  display: 'flex',
  border: '1px solid #e2e2e2',
  boxShadow: '-3px 0 7px 0 #ededed',
});

const StyledTabList = styled(TabList, {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  borderRight: '1px solid #e3e3e3'
});

const StyledTab = styled(Tab, {
  width: '304px',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '400',
  cursor: 'pointer'
});

const TabName = styled('div', (props) => ({
  padding: '20px 31px 20px 29px',
  color: props.active ? '#323232' : '#878787',
  backgroundColor: props.active ? '#f5f5f5' : '#ffffff',
  borderLeft: '3px solid',
  borderColor: props.active ? '#315efb' : '#ffffff'
}));

const StyledTabPanel = styled(TabPanel, {
  width: '100%',
  background: '#ffffff',
  boxShadow: '3px 0 7px 0 #ededed'
});

const CollapseButton = styled('div', {
  paddingTop: '12px',
  paddingBottom: '12px',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '400',
  color: '#878787',
  textAlign: 'center',
  background: '#fdfdfd',
  border: '1px solid #e2e2e2',
  borderTop: 'none',
  boxShadow: '3px 0 7px 0 #ededed, -3px 0 7px 0 #ededed',
  cursor: 'pointer'
});

class DetailsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      expanded: this.props.expanded
    }
  }

  handleSelect(index) {
    this.setState({ activeTab: index });
  }

  isActive(index) {
    return this.state.activeTab === index;
  }

  render() {
    return (
      <StyledDetailsArea expanded={this.props.expanded}>
        <StyledTabs
        onSelect={this.handleSelect.bind(this)}
        //selectedIndex={3}
        >
          <StyledTabList>
            <StyledTab>
              <TabName active={this.isActive(0)}>
                Анкета и заметка
              </TabName>
            </StyledTab>
            <StyledTab>
              <TabName active={this.isActive(1)}>
                Действия с клиентом
              </TabName>
            </StyledTab>
            <StyledTab>
              <TabName active={this.isActive(2)}>
                Привязанные объекты
              </TabName>
            </StyledTab>
            <StyledTab>
              <TabName active={this.isActive(3)}>
                Привязанные поиски
              </TabName>
            </StyledTab>
            <StyledTab>
              <TabName active={this.isActive(4)}>
                Ипотека
              </TabName>
            </StyledTab>
          </StyledTabList>
          <StyledTabPanel>
            <Profile />
          </StyledTabPanel>
          <StyledTabPanel>
            <ContactActivity />
          </StyledTabPanel>
          <StyledTabPanel>
            <ContactPremises />
          </StyledTabPanel>
          <StyledTabPanel>
            <ContactSearches />
          </StyledTabPanel>
          <StyledTabPanel>
            <Mortgage />
          </StyledTabPanel>
        </StyledTabs>
        <CollapseButton onClick={this.props.toggleDetailedArea.bind(this)}>Свернуть</CollapseButton>
      </StyledDetailsArea>
    )
  }
}

export default DetailsArea;
