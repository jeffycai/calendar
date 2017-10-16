/* eslint react/no-multi-comp:0, no-console:0 */

<<<<<<< master
import 'rc-calendar/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/src/Picker';
import zhCN from 'rc-calendar/src/locale/zh_CN';
import enUS from 'rc-calendar/src/locale/en_US';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
=======
<<<<<<< remotes/origin/gh-pages
=======
import 'ziaochina-rc-calendar/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'ziaochina-rc-calendar';
import DatePicker from 'ziaochina-rc-calendar/src/Picker';
import zhCN from 'ziaochina-rc-calendar/src/locale/zh_CN';
import enUS from 'ziaochina-rc-calendar/src/locale/en_US';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
>>>>>>> local
>>>>>>> local

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD HH:mm:ss';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

function getFormat(time) {
  return time ? format : 'YYYY-MM-DD';
}


const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = <TimePickerPanel defaultValue={moment('00:00:00', 'HH:mm:ss')} />;

function disabledTime(date) {
  console.log('disabledTime', date);
  if (date && (date.date() === 15)) {
    return {
      disabledHours() {
        return [3, 4];
      },
    };
  }
  return {
    disabledHours() {
      return [1, 2];
    },
  };
}


function disabledDate(current) {
  if (!current) {
    // allow empty select
    return false;
  }
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.valueOf() < date.valueOf();  // can not select days before today
}

const Test = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.object,
    defaultCalendarValue: React.PropTypes.object,
  },

  getInitialState() {
    return {
      showTime: false,
      showDateInput: false,
      disabled: false,
      value: this.props.defaultValue,
    };
  },

  onChange(value) {
    console.log('DatePicker change: ', (value && value.format(format)));
    this.setState({
      value,
    });
  },

  onShowTimeChange(e) {
    this.setState({
      showTime: e.target.checked,
    });
  },

  onShowDateInputChange(e) {
    this.setState({
      showDateInput: e.target.checked,
    });
  },

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
<<<<<<< master

=======
<<<<<<< remotes/origin/gh-pages
  render: function render() {
    var state = this.state;
    var calendar = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_calendar___default.a, {
      locale: cn ? __WEBPACK_IMPORTED_MODULE_5_rc_calendar_src_locale_zh_CN___default.a : __WEBPACK_IMPORTED_MODULE_6_rc_calendar_src_locale_en_US___default.a,
      style: { zIndex: 1000 },
      dateInputPlaceholder: 'please input',
      formatter: getFormat(state.showTime),
      disabledTime: state.showTime ? disabledTime : null,
      timePicker: state.showTime ? timePickerElement : null,
      defaultValue: this.props.defaultCalendarValue,
      showDateInput: state.showDateInput,
      disabledDate: disabledDate
    });
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { style: { width: 400, margin: 20 } },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: { marginBottom: 10 } },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
            type: 'checkbox',
            checked: state.showTime,
            onChange: this.onShowTimeChange
          }),
          'showTime'
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
            type: 'checkbox',
            checked: state.showDateInput,
            onChange: this.onShowDateInputChange
          }),
          'showDateInput'
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
            checked: state.disabled,
            onChange: this.toggleDisabled,
            type: 'checkbox'
          }),
          'disabled'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: {
            boxSizing: 'border-box',
            position: 'relative',
            display: 'block',
            lineHeight: 1.5,
            marginBottom: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_rc_calendar_src_Picker___default.a,
          {
            animation: 'slide-up',
            disabled: state.disabled,
            calendar: calendar,
            value: state.value,
            onChange: this.onChange
          },
          function (_ref) {
            var value = _ref.value;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { tabIndex: '0' },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                placeholder: 'please select',
                style: { width: 250 },
                disabled: state.disabled,
                readOnly: true,
                tabIndex: '-1',
                className: 'ant-calendar-picker-input ant-input',
                value: value && value.format(getFormat(state.showTime)) || ''
              })
            );
=======

>>>>>>> local
  render() {
    const state = this.state;
    const calendar = (<Calendar
      locale={cn ? zhCN : enUS}
      style={{ zIndex: 1000 }}
<<<<<<< master
      dateInputPlaceholder="please input"
      formatter={getFormat(state.showTime)}
      disabledTime={state.showTime ? disabledTime : null}
      timePicker={state.showTime ? timePickerElement : null}
      defaultValue={this.props.defaultCalendarValue}
      showDateInput={state.showDateInput}
      disabledDate={disabledDate}
=======
      formatter={getFormat(state.showTime)}
      timePicker={state.showTime ? timePickerElement : null}
      defaultValue={this.props.defaultCalendarValue}
      showDateInput={state.showDateInput}
>>>>>>> local
    />);
    return (<div style={{ width: 400, margin: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <label>
          <input
            type="checkbox"
            checked={state.showTime}
            onChange={this.onShowTimeChange}
          />
          showTime
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input
            type="checkbox"
            checked={state.showDateInput}
            onChange={this.onShowDateInputChange}
          />
          showDateInput
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input
            checked={state.disabled}
            onChange={this.toggleDisabled}
            type="checkbox"
          />
          disabled
        </label>
      </div>
      <div style={{
        boxSizing: 'border-box',
        position: 'relative',
        display: 'block',
        lineHeight: 1.5,
        marginBottom: 22,
      }}
      >
        <DatePicker
          animation="slide-up"
          disabled={state.disabled}
          calendar={calendar}
          value={state.value}
          onChange={this.onChange}
        >
          {
            ({ value }) => {
              return (
                <span tabIndex="0">
<<<<<<< master
                <input
                  placeholder="please select"
                  style={{ width: 250 }}
                  disabled={state.disabled}
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input"
                  value={value && value.format(getFormat(state.showTime)) || ''}
                />
                </span>
              );
            }
=======
                  <input
                    placeholder="please select"
                    style={{ width: 250 }}
                    disabled={state.disabled}
                    readOnly
                    tabIndex="-1"
                    className="ant-calendar-picker-input ant-input"
                    value={value && value.format(getFormat(state.showTime)) || ''}
                  />
                </span>
              );
            }
>>>>>>> local
>>>>>>> local
          }
        </DatePicker>
      </div>
    </div>);
  },
});

function onStandaloneSelect(value) {
  console.log('onStandaloneSelect');
  console.log(value && value.format(format));
}

function onStandaloneChange(value) {
  console.log('onStandaloneChange');
  console.log(value && value.format(format));
}


<<<<<<< master
=======
<<<<<<< remotes/origin/gh-pages
/***/ })
],[359]);
//# sourceMappingURL=antd-calendar.js.map
=======
>>>>>>> local
ReactDOM.render((<div
  style={{
    zIndex: 1000,
    position: 'relative',
    width: 900,
    margin: '20px auto',
  }}
>
  <div>
<<<<<<< master
    <div style={{ margin: 10 }}>
      <Calendar
        showWeekNumber={false}
        locale={cn ? zhCN : enUS}
        defaultValue={now}
        disabledTime={disabledTime}
        showToday
        formatter={getFormat(true)}
        showOk={false}
        timePicker={timePickerElement}
        onChange={onStandaloneChange}
        disabledDate={disabledDate}
        onSelect={onStandaloneSelect}
      />
    </div>
    <div style={{ float: 'left', width: 300 }}>
      <Test defaultValue={now} />
    </div>
=======
   
>>>>>>> local
    <div style={{ float: 'right', width: 300 }}>
      <Test defaultCalendarValue={defaultCalendarValue} />
    </div>
    <div style={{ clear: 'both' }}></div>
  </div>
</div>), document.getElementById('__react-content'));
<<<<<<< master
=======
>>>>>>> local
>>>>>>> local
