import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import './UiSelect.css';

class UiSelect extends Component {
  constructor(props) {
    super(props);
    this.options = this.props.options;
    this.state = {
      value: this.options[0].value
    }
  }

  componentDidMount() {
    if (this.props.little) {
      let componentNode = ReactDOM.findDOMNode(this);
      componentNode.querySelector('.Select-value').setAttribute('style','font-size: 12px;line-height: 24px;');
      componentNode.querySelector('.Select-control').setAttribute('style','height: 24px');
    }
  }

  onChange(value) {
    this.setState({ value: value })
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.value}
        clearable={false}
        searchable={false}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}

export default UiSelect
