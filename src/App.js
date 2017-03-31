import React, { Component } from 'react';
import {styled} from 'styletron-react';
import Contact from './Contact';

const StyledApp = styled('div', {
  margin: '0 20px',
  fontFamily: '"Roboto", "Arial", sans-serif'
})

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Contact />
      </StyledApp>
    );
  }
}

export default App;
