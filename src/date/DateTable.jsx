
import React from 'react';
import DateTHead from './DateTHead';
import DateTBody from './DateTBody';

<<<<<<< master
export default
class DateTable extends React.Component {
=======
export default class DateTable extends React.Component {
>>>>>>> local
  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    return (<table className = {`${prefixCls}-table`} cellSpacing="0" role="grid">
      <DateTHead {...props}/>
      <DateTBody {...props}/>
    </table>);
  }
}
