import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import toFragment from 'rc-util/lib/Children/mapSelf';
import MonthPanel from '../month/MonthPanel';
import YearPanel from '../year/YearPanel';
import MonthPanelSelect from '../month/MonthPanelSelect';
import YearPanelSelect from '../year/YearPanelSelect';
import DecadePanel from '../decade/DecadePanel';

function goMonth(direction) {
  const next = this.props.value.clone();
  next.add(direction, 'months');
  this.props.onValueChange(next);
}

function goYear(direction) {
  const next = this.props.value.clone();
  next.add(direction, 'years');
  this.props.onValueChange(next);
}

function showIf(condition, el) {
  return condition ? el : null;
}

const CalendarHeader = createReactClass({
  propTypes: {
    prefixCls: PropTypes.string,
    value: PropTypes.object,
    onValueChange: PropTypes.func,
    showTimePicker: PropTypes.bool,
    onPanelChange: PropTypes.func,
    locale: PropTypes.object,
    enablePrev: PropTypes.any,
    enableNext: PropTypes.any,
    disabledMonth: PropTypes.func,
    showMonthDropdown: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    dropdownMode: PropTypes.string,
  },

  getDefaultProps() {
    return {
      enableNext: 1,
      enablePrev: 1,
      showYearDropdown: false,
      showMonthDropdown: false,
      dropdownMode: '',
      onPanelChange() { },
      onValueChange() { },
    };
  },

  getInitialState() {
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return { yearPanelReferer: null };
  },

  onMonthSelect(value) {
    this.props.onPanelChange(value, 'date');
    if (this.props.onMonthSelect) {
      this.props.onMonthSelect(value);
    } else {
      this.props.onValueChange(value);
    }
  },

  onYearSelect(value) {
    const referer = this.state.yearPanelReferer;
    this.setState({ yearPanelReferer: null });
    this.props.onPanelChange(value, referer);
    this.props.onValueChange(value);
  },

  onYearSel(value) {
    this.props.onPanelChange(value, 'date');
    this.props.onValueChange(value);
  },

  onDecadeSelect(value) {
    this.props.onPanelChange(value, 'year');
    this.props.onValueChange(value);
  },


  monthYearElement(showTimePicker, selectMode) {
    const props = this.props;
    const prefixCls = props.prefixCls;
    const locale = props.locale;
    const value = props.value;
    const localeData = value.localeData();
    const monthBeforeYear = locale.monthBeforeYear;
    const selectClassName = `${prefixCls}-${monthBeforeYear ? 'my-select' : 'ym-select'}`;
    const year = (<a
      className={`${prefixCls}-year-select`}
      role="button"
      onClick={showTimePicker ? null : () => this.showYearPanel('date')}
      title={locale.yearSelect}
    >
      {value.format(locale.yearFormat)}<span style={{ paddingLeft: '5px' }}>▼</span>
    </a>);
    const month = (<a
      className={`${prefixCls}-month-select`}
      role="button"
      onClick={showTimePicker ? null : this.showMonthPanel}
      title={locale.monthSelect}
    >
      {localeData.monthsShort(value)}<span style={{ paddingLeft: '5px' }}>▼</span>
    </a>);
    let day;
    if (showTimePicker) {
      day = (<a
        className={`${prefixCls}-day-select`}
        role="button"
      >
        {value.format(locale.dayFormat)}
      </a>);
    }
    let my = [];
    if (monthBeforeYear) {
      my = [month, day, year];
    } else {
      my = [year, month, day];
    }
    return (<span className={selectClassName}>
      {toFragment(my)}
    </span>);
  },

  showMonthPanel() {
    // null means that users' interaction doesn't change value
    this.props.onPanelChange(null, 'month');
  },

  showYearPanel(referer) {
    this.setState({ yearPanelReferer: referer });
    this.props.onPanelChange(null, 'year');
  },

  showDecadePanel() {
    this.props.onPanelChange(null, 'decade');
  },

  showYearPanelSelect(referer) {

  },

  render() {
    const { props } = this;
    const {
      prefixCls,
      locale,
      mode,
      value,
      showTimePicker,
      enableNext,
      enablePrev,
      disabledMonth,
      showYearDropdown,
      showMonthDropdown,
      dropdownMode,
    } = props;
    let selectMode = (location.href && location.href.indexOf('?select') > -1) || (showYearDropdown && showMonthDropdown)
    let panel = null;
    if (mode === 'month') {
      if (selectMode) {
        panel = (
          <MonthPanelSelect
            locale={locale}
            defaultValue={value}
            rootPrefixCls={prefixCls}
            onSelect={this.onMonthSelect}
            //onYearPanelShow={() => this.showYearPanel('month')}
            disabledDate={disabledMonth}
            cellRender={props.monthCellRender}
            contentRender={props.monthCellContentRender}
          />
        );
      }
      else {
        panel = (
          <MonthPanel
            locale={locale}
            defaultValue={value}
            rootPrefixCls={prefixCls}
            onSelect={this.onMonthSelect}
            onYearPanelShow={() => this.showYearPanel('month')}
            disabledDate={disabledMonth}
            cellRender={props.monthCellRender}
            contentRender={props.monthCellContentRender}
          />
        );
      }

    }
    if (mode === 'year') {
      if (selectMode) {
        panel = (
          <YearPanelSelect
            locale={locale}
            defaultValue={value}
            rootPrefixCls={prefixCls}
            onSelect={this.onYearSelect}
            //onDecadePanelShow={this.showDecadePanel}
          />
        );
      }
      else {
        panel = (
          <YearPanel
            locale={locale}
            defaultValue={value}
            rootPrefixCls={prefixCls}
            onSelect={this.onYearSelect}
            onDecadePanelShow={this.showDecadePanel}
          />
        );
      }

    }
    if (mode === 'decade') {
      panel = (
        <DecadePanel
          locale={locale}
          defaultValue={value}
          rootPrefixCls={prefixCls}
          onSelect={this.onDecadeSelect}
        />
      );
    }



    return (<div className={`${prefixCls}-header`}>
      <div style={{ position: 'relative' }}>
        {
          showIf(enablePrev && !showTimePicker,
            <a
              className={`${prefixCls}-prev-year-btn`}
              role="button"
              onClick={this.previousYear}
              title={locale.previousYear}
            />)}
        {showIf(enablePrev && !showTimePicker,
          <a
            className={`${prefixCls}-prev-month-btn`}
            role="button"
            onClick={this.previousMonth}
            title={locale.previousMonth}
          />)}
        {this.monthYearElement(showTimePicker, selectMode)}
        {showIf(enableNext && !showTimePicker,
          <a
            className={`${prefixCls}-next-month-btn`}
            onClick={this.nextMonth}
            title={locale.nextMonth}
          />)}
        {
          showIf(enableNext && !showTimePicker,
            <a
              className={`${prefixCls}-next-year-btn`}
              onClick={this.nextYear}
              title={locale.nextYear}
            />)}
      </div>
      {panel}
    </div>);
  },
});

export default CalendarHeader;
