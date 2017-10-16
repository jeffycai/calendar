import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import toFragment from 'rc-util/lib/Children/mapSelf';
import MonthPanel from '../month/MonthPanel';
<<<<<<< master
import YearPanel from '../year/YearPanel';
=======
import MonthPanelSelect from '../month/MonthPanelSelect';
import YearPanel from '../year/YearPanel';
import YearPanelSelect from '../year/YearPanelSelect';
>>>>>>> local
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
<<<<<<< master
      onPanelChange() {},
      onValueChange() {},
=======
      onPanelChange() { },
      onValueChange() { },
>>>>>>> local
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

<<<<<<< master
=======
  onYearSel(value) {
    this.props.onPanelChange(value, 'date');
    this.props.onValueChange(value);
  },

>>>>>>> local
  onDecadeSelect(value) {
    this.props.onPanelChange(value, 'year');
    this.props.onValueChange(value);
  },

<<<<<<< master
  monthYearElement(showTimePicker) {
=======

  monthYearElement(showTimePicker, selectMode) {
>>>>>>> local
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
<<<<<<< master
      {value.format(locale.yearFormat)}
=======
      {value.format(locale.yearFormat)}<span style={{ paddingLeft: '5px' }}>▼</span>
>>>>>>> local
    </a>);
    const month = (<a
      className={`${prefixCls}-month-select`}
      role="button"
      onClick={showTimePicker ? null : this.showMonthPanel}
      title={locale.monthSelect}
    >
<<<<<<< master
      {localeData.monthsShort(value)}
=======
      {localeData.monthsShort(value)}<span style={{ paddingLeft: '5px' }}>▼</span>
>>>>>>> local
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
<<<<<<< master
    {toFragment(my)}
=======
      {toFragment(my)}
>>>>>>> local
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

<<<<<<< master
=======
  showYearPanelSelect(referer) {

  },

>>>>>>> local
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
<<<<<<< master

    let panel = null;
    if (mode === 'month') {
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
          showYearDropdown={showYearDropdown}
          showMonthDropdown={showMonthDropdown}
          dropdownMode={dropdownMode}
        />
      );
    }
    if (mode === 'year') {
      panel = (
        <YearPanel
          locale={locale}
          defaultValue={value}
          rootPrefixCls={prefixCls}
          onSelect={this.onYearSelect}
          onDecadePanelShow={this.showDecadePanel}
        />
      );
=======
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

>>>>>>> local
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

<<<<<<< master
    return (<div className={`${prefixCls}-header`}>
      <div style={{ position: 'relative' }}>
        {showIf(enablePrev && !showTimePicker,
          <a
            className={`${prefixCls}-prev-year-btn`}
            role="button"
            onClick={this.previousYear}
            title={locale.previousYear}
          />)}
=======


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
>>>>>>> local
        {showIf(enablePrev && !showTimePicker,
          <a
            className={`${prefixCls}-prev-month-btn`}
            role="button"
            onClick={this.previousMonth}
            title={locale.previousMonth}
          />)}
<<<<<<< master
        {this.monthYearElement(showTimePicker)}
=======
        {this.monthYearElement(showTimePicker, selectMode)}
>>>>>>> local
        {showIf(enableNext && !showTimePicker,
          <a
            className={`${prefixCls}-next-month-btn`}
            onClick={this.nextMonth}
            title={locale.nextMonth}
          />)}
<<<<<<< master
        {showIf(enableNext && !showTimePicker,
          <a
            className={`${prefixCls}-next-year-btn`}
            onClick={this.nextYear}
            title={locale.nextYear}
          />)}
=======
        {
          showIf(enableNext && !showTimePicker,
            <a
              className={`${prefixCls}-next-year-btn`}
              onClick={this.nextYear}
              title={locale.nextYear}
            />)}
>>>>>>> local
      </div>
      {panel}
    </div>);
  },
});

export default CalendarHeader;
