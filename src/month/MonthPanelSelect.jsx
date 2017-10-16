import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import MonthTable from './MonthTableSelect';

function goYear(direction) {
  const next = this.state.value.clone();
  next.add(direction, 'year');
  this.setAndChangeValue(next);
}

function noop() {

}

const MonthPanelSelect = createReactClass({
  propTypes: {
    onChange: PropTypes.func,
    disabledDate: PropTypes.func,
    onSelect: PropTypes.func,
  },

  getDefaultProps() {
    return {
      onChange: noop,
      onSelect: noop,
    };
  },

  getInitialState() {
    const props = this.props;
    // bind methods
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    this.prefixCls = `${props.rootPrefixCls}-month-panel-select`;
    return {
      value: props.value || props.defaultValue,
    };
  },

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  },

  setAndChangeValue(value) {
    this.setValue(value);
    this.props.onChange(value);
  },

  setAndSelectValue(value) {
    this.setValue(value);
    this.props.onSelect(value);
  },

  setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
  },

  render() {
    const props = this.props;
    const value = this.state.value;
    const cellRender = props.cellRender;
    const contentRender = props.contentRender;
    const locale = props.locale;
    const year = value.year();
    const prefixCls = this.prefixCls;
    return (
      <div className={prefixCls} id={prefixCls} style={props.style}>
        <div className={`${prefixCls}-body`}>
          <MonthTable
            disabledDate={props.disabledDate}
            onSelect={this.setAndSelectValue}
            locale={locale}
            value={value}
            cellRender={cellRender}
            contentRender={contentRender}
            prefixCls={prefixCls}
          />
        </div>
      </div>);
  },
});

export default MonthPanelSelect;
