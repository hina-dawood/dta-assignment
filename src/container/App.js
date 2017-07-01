import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllData } from '../actions/index';
import { bindActionCreators } from 'redux';
import ProgressBar from '../components/ProgressBar';
import '../styles/App.css';

class App extends Component {


  /*
  initialize the state values -
  activeBar: sets ProgressBar which is selected in the drop-down list; can take value 1, 2, 3, 4... depending upon the order ProgressBar appears on screen.
  changeByValue: sets the value to increment or decrement the active ProgressBar by
  bars: bars data sent by API
  buttons: buttons data sent by API
   */
  constructor(props){
    super(props)
    this.state = {
      activeBar: "1",
      changeByValue: 0,
      bars : [],
      buttons: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);

  }

  /*
  API request to fetch data using axios
  */
  componentDidMount(){
    this.props.fetchAllData();
  }

  /*
  variable 'allData' stores the API result using redux framework
   */
  componentWillReceiveProps(nextProps){
    this.setState({
      bars: nextProps.allData.bars,
      buttons: nextProps.allData.buttons
    })
  }

  /*
  ignore component update (i.e do not re-render) when only drop-down list value is changed but button is not clicked
   */
  shouldComponentUpdate(nextProps, nextState) {
    // eslint-disable-next-line
    return !(nextState.activeBar != this.state.activeBar);
  }

  /*
  handler function called on value change in select element and sets the active ProgressBar
   */
  handleChange(event){
    this.setState({
      activeBar: event.target.value
    })
  }

  /*
  handler function called when any button clicked for incrementing or decrementing active ProgressBar
   */
  onClickButton(event){
    this.setState({
      //linting is being performed at compilation time, see lint warnings on terminal by changing invocation to parseInt(event.target.innerText)
      changeByValue: parseInt(event.target.innerText, 10)
    })
  }

  /*
  function to dynamically create variable number of ProgressBars and assign it's initial value depending upon dynamic data received
  property 'order': the ProgressBar display number (determined by order in which it is displayed on screen)
  property 'activeBar': ProgressBar which is selected in the drop-down list
  property 'changeByValue': value to increment or decrement the active ProgressBar by
  property 'initialValue': initial value of the ProgressBar sent by API
   */
  renderProgressBars(){
    return this.state.bars.map((barVal,idx) => {
      return (
        <ProgressBar key={idx} order={idx+1} activeBar={this.state.activeBar} changeByValue={this.state.changeByValue} initialValue={barVal}/>
      )
    })
  }

  /*
  function to dynamically  create variable number of buttons and assign value by which it increments or decrements active ProgressBar value
   */
  renderButtons(){
    return this.state.buttons.map((val,idx) => {
      return (
          <button key={idx} className="btn" type="button">{val}</button>
      )
    })
  }

  /*
  function to dynamically create option values for ProgressBars in the drop-down list
   */
  renderOptions(){
    return this.state.bars.map((barVal,idx) => {
      return(
          <option key={idx} value={idx+1}>#progress{idx+1}</option>
      )
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Progress Bars Demo</h1>
        {this.renderProgressBars()}
        <div className="control">
          <div className="selectBox">
            <select onChange={this.handleChange}>
              {this.renderOptions()}
            </select>
          </div>
          <div className="buttonBox" onClick={this.onClickButton}>
            {this.renderButtons()}
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    allData: state.allData
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchAllData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);