import React, { Component } from 'react';
import weather from 'weather-js';
import logo from './logo.svg';
import Clock from './clock';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {refreshId: 0};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateContent(),
      5*60*1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    var Iframe=this.props.iframe;
    return (
      <div className="App" style={{textAlign: 'center', width: '100%'}}>
        <div style={{height: 524, display: 'inline-table', marginLeft: 20, marginRight: 20}} >
          <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
            <Clock />
          </div>
        </div>
        <div style={{display: 'inline'}}>
          <Iframe src={this.props.src+'&id='+this.state.refreshId} width={768} height={400} style={{borderWidth:0}} />
        </div>
      </div>
    );
  }

  updateContent() {
    this.setState({
      refreshId: Math.random()
    });
  }
}

export default App;
