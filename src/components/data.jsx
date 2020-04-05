import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class Date extends Component {
  constructor(){
    super();
    this.state={
      startDate:null,
      endDate:null,
      flag:""
    }
  }
  
  render() {
    //   if(this.state.startDate != ""){
    //     {this.setState({flag:"1"})}
    //   }
    return (<div>
      <SingleDatePicker
    //   isOutsideRange={() => false}
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        />
        {(this.state.date)?<p>You Have No Activities On This Day</p>:<p></p>}

</div>
    )
  }
}

export default Date;
