import React, { Component } from 'react';
import {styled} from 'styletron-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ClientActions from './actions/ClientActions';
import * as ClientStatusesActions from './actions/ClientStatusesActions';
import * as DealStatusesActions from './actions/DealStatusesActions';
import Contact from './Contact';

const StyledApp = styled('div', {
  margin: '0 20px',
  fontFamily: '"Roboto", "Arial", sans-serif'
})

class App extends Component {
  componentDidMount(){
    this.props.fetchGetClientStatuses();
    this.props.fetchGetDealStatuses();
    this.props.fetchGetClient();
  }
  render() {
    return (
      <StyledApp>
        {this.props.clients.map((client) => (
          <Contact
            key={client.id}
            client={client}
            clientStatuses={this.props.clientStatuses}
            dealStatuses={this.props.dealStatuses}
            fetchEditClient={this.props.fetchEditClient.bind(this)}
          />
        ))}
      </StyledApp>
    );
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
    ...ClientStatusesActions,
    ...DealStatusesActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
