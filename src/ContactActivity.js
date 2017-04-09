import React, { Component } from 'react';
import { styled } from 'styletron-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActivitiesActions from './actions/ActivitiesActions';
import { editIcon, deleteIcon } from './SvgImages';

const  StyledContactActivity = styled('div', {
  paddingTop: '16px',
  textAlign: 'center'
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

const ActivityFilter = styled('ul', {
  display: 'flex',
  margin: '0',
  paddingLeft: '20px',
  listStyle: 'none'
});

const ActivityFilterItem = styled('li', (props) => ({
  marginRight: '30px',
  paddingBottom: '14px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: props.active ? '#323232' : '#878787',
  borderBottom: '3px solid',
  borderBottomColor: props.active ? '#315efb' : '#ffffff'
}));

const ActivityFilterCount = styled('span', {
  marginLeft: '5px',
  padding: '1px 4px',
  fontSize: '13px',
  lineHeight: '15px',
  backgroundColor: '#f5f5f5',
  borderRadius: '2px'
});

const ActivityList = styled('table', {
  marginBottom: '30px',
  width: '100%',
  fontSize: '13px',
  lineHeight: '15px',
  fontWeight: '400',
  color: '#323232',
  borderCollapse: 'collapse',
  backgroundColor: '#fdfdfd'
});

const Activity = styled('tr', {
  border: 'solid #e2e2e2',
  borderWidth: '1px 0 1px 0'
});

const ActivityStatus = styled('td', {
  padding: '17px 7px 17px 20px',
  width: '11px'
});

const ActivityStatusIcon = styled('span', props => ({
  display: 'block',
  width: '11px',
  height: '11px',
  fontSize: '0',
  backgroundColor: props.color,
  borderRadius: '50%'
}));

const ActivityName = styled('td', {
  padding: '15px 0',
  width: '277px',
  textAlign: 'left'
});

const ActivityDate = styled('td', {
  textAlign: 'left'
});

const ActivityIcons = styled('td', {
  paddingRight: '20px',
  textAlign: 'right'
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

const CalendarLink = styled('a', {
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#878787',
  cursor: 'pointer'
});

class ContactActivity extends Component {
  constructor(props){
    super(props);
    this.state = { activeFilter: 0 }
  }

  componentDidMount() {
    this.props.fetchGetActivities();
  }

  activitiesCount() {
    let count = { plan: 0, done: 0 }
    this.props.activities.map(activity => {
      return (
        activity.done === false ?
        {...count, plan: count.plan++} :
        {...count, done: count.done++}
    )})
    return count;
  }

  onFilterClick(filterIndex) {
    this.setState({ activeFilter: filterIndex });
  }

  render() {
    return (
      <StyledContactActivity>
        <TabTitleRow>
          <TabTitle>Действия с клиентом</TabTitle>
          <TabAddBtn>Добавить действие</TabAddBtn>
        </TabTitleRow>
        <ActivityFilter>
          <ActivityFilterItem
            active={this.state.activeFilter === 0}
            onClick={this.onFilterClick.bind(this, 0)}
          >
            Запланированы
            <ActivityFilterCount>
              {this.activitiesCount().plan}
            </ActivityFilterCount>
          </ActivityFilterItem>
          <ActivityFilterItem
            active={this.state.activeFilter === 1}
            onClick={this.onFilterClick.bind(this, 1)}
          >
            Выполнены
            <ActivityFilterCount>
              {this.activitiesCount().done}
            </ActivityFilterCount>
          </ActivityFilterItem>
        </ActivityFilter>
        <ActivityList>
          <tbody>
            {this.props.activities.map( activity => {
              return (
                <Activity key={activity.id}>
                  <ActivityStatus>
                    <ActivityStatusIcon color={activity.type_color} />
                  </ActivityStatus>
                  <ActivityName>{activity.name}</ActivityName>
                  <ActivityDate>{activity.date}</ActivityDate>
                  <ActivityIcons>
                    <EditIcon />
                    <DeleteIcon />
                  </ActivityIcons>
                </Activity>
              )
            })}
          </tbody>
        </ActivityList>
        <CalendarLink>Посмотреть действия в календаре</CalendarLink>
      </StyledContactActivity>
    )
  }
}

function mapStateToProps(state) {
  return { activities: state.activities.activitiesList }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActivitiesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactActivity);
