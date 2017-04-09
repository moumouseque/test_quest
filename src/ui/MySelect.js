import React, { Component } from 'react';
import {styled} from 'styletron-react';
import { selectBlackArrowBigUp, selectBlackArrowBigDown } from '../SvgImages';

const StyledMySelect = styled('div', {
  position: 'relative',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#323232',
  backgroundColor: '#ffffff',
  border: '1px solid #d2d2d2',
  borderRadius: '2px'
});

const ValueZone = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const StyledValue = styled('span', (props) => ({
  position: 'relative',
  padding: '7px 15px',
  color: props.color ? '#323232' : '#9b9b9b',
  paddingLeft: props.color ? '34px' : '15px',
  '::before': props.color ? {
    content: '""',
    position: 'absolute',
    top: '9px',
    left: '15px',
    display: 'block',
    width: '12px',
    height: '12px',
    backgroundColor: props.color,
    borderRadius: '50%'
  } : {
    content: '""'
  }
}));

const ArrowZone = styled('div', {
  paddingRight: '20px'
});

const Arrow = styled('span', (props) => ({
  display: 'block',
  width: '12px',
  height: '6px',
  background: 'no-repeat',
  backgroundImage: props.type ? `url(${selectBlackArrowBigDown})` : `url(${selectBlackArrowBigUp})`
}));

const OptionsZone = styled('div', {
  position: 'absolute',
  top: '35px',
  left: '-1px',
  padding: '3px 15px',
  width: '348px',
  backgroundColor: '#ffffff',
  border: '1px solid #e1e1e1',
  boxShadow: '0 3px 7px 0 #ededed'
});

const Option = styled('div', (props) => ({
  position: 'relative',
  margin: '7px 0',
  paddingLeft: '19px',
  cursor: 'pointer',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '0',
    display: 'block',
    width: '12px',
    height: '12px',
    backgroundColor: props.color,
    borderRadius: '50%'
  }
}));

class MySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        text: 'Выберите действие',
        color: ''
      }
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  handleOptionClick(color, value, event) {
    this.selectOption(color, event);
    this.props.valueSelect(value);
  }

  selectOption(color, event) {
    this.setState({
      value: {
        text: event.target.innerHTML,
        color: color
      }
    })
    this.handleClose();
  }

  render() {
    return (
      <StyledMySelect>
        <ValueZone onClick={this.handleToggle.bind(this)} >
          <StyledValue color={this.state.value.color}>
            {this.state.value.text}
          </StyledValue>
          <ArrowZone>
            <Arrow type={this.state.open} />
          </ArrowZone>
        </ValueZone>
        {this.state.open &&
          <OptionsZone>
            {this.props.options.map((option, index) => (
              <Option
                key={index}
                color={option.color}
                onClick={this.handleOptionClick.bind(this, option.color, option.value)}
              >
                {option.label}
              </Option>
            ))}
          </OptionsZone>
        }
      </StyledMySelect>
    )
  }
}

export default MySelect
