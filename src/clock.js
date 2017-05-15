import React, { Component } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    var seconds = this.state.date.getSeconds();
    var minutes = this.state.date.getMinutes();
    var colors = this.rainbowColors(seconds);
    return (
      <div>
        <h1><span style={{color: colors.hour}}>{ this.formattedHour() }</span><span style={{color: colors.colon1}}>:</span><span style={{color: colors.minute}}>{this.twoDigit(minutes)}</span><span style={{color: colors.colon2}}>:</span><span style={{color: colors.second}}>{this.twoDigit(seconds)}</span></h1>
      </div>
    );
  }

  formattedHour() {
    var hour = this.state.date.getHours();
    if (hour > 12) {
      return hour - 12;
    } else {
      return hour;
    }
  }

  twoDigit(number) {
    if (number < 10) {
      return '0' + number
    } else {
      return '' + number
    }
  }

  rainbowColors(seconds) {
    var colors = ['#ff5555', '#ff8855', '#ffff77', '#77ff77', '#77ffdd', '#5599ff', '#aa77ff']
    var hourIndex = seconds % colors.length;
    var colon1 = (seconds + 1) % colors.length;
    var minuteIndex = (seconds + 2) % colors.length;
    var colon2 = (seconds + 3) % colors.length;
    var secondIndex = (seconds + 4) % colors.length;
    return {hour: colors[hourIndex], colon1: colors[colon1], minute: colors[minuteIndex], colon2: colors[colon2], second: colors[secondIndex]};
  }
}

export default Clock;
