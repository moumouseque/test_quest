import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import './UiSelect.css';

class UiSelect extends Component {
  constructor(props) {
    super(props);
    this.options = this.props.options;
    this.name = this.props.name;
    this.state = {
      value: this.props.value
    }
  }

  componentDidMount() {
    if (this.props.little) {
      let componentNode = ReactDOM.findDOMNode(this);
      componentNode.querySelector('.Select-value').setAttribute('style','font-size: 12px;line-height: 24px;');
      componentNode.querySelector('.Select-control').setAttribute('style','height: 24px');
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value
    })
  }

  onChange(value) {
    this.setState({ value: value })
  }

  render() {
    return (
      <Select
        name={this.name}
        options={this.options}
        value={this.props.onChange ? this.props.value : this.state.value}
        clearable={false}
        placeholder={this.props.placeholder}
        valueComponent={this.props.valueComponent}
        searchable={false}
        onChange={this.props.onChange || this.onChange.bind(this)}
        onInputChange={this.props.onInputChange}
        arrowRenderer={this.props.arrowRenderer}
      />
    )
  }
}

export default UiSelect
