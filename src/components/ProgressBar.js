/**
 * Created by hina on 30/6/17.
 */
import React, { Component } from 'react';
import '../styles/ProgressBar.css'

class ProgressBar extends Component {

    /*
        initialize the state values -
        progressBarValue: sets to initial value
        active: sets to true if the active ProgressBar number is same as the ProgressBar display order number
     */
    constructor(props){
        super(props);
        this.state = {
            progressBarValue: props.initialValue,
            // eslint-disable-next-line
            active: (props.activeBar == props.order) ? true : false
        };
    }

    /*
    After ProgressBar component mounts set its initial width
     */
    componentDidMount(){
        var element = this.getProgressBarNode();
        element.style.width = this.state.progressBarValue + '%';
    }

    /*
    Change the width of the ProgressBar if it is active and has received a new property value to increment or decrement it
     */
    componentWillReceiveProps(newProps){
        // eslint-disable-next-line
        this.setState({active: (newProps.activeBar == newProps.order) ? true : false},() => {
            if (this.state.active){
                this.modifyProgressBarValue(this.props.changeByValue)
            }
        });
    }

    /*
    function to set the new value of the ProgressBar, it makes conditional check that new value cannot be negative number
     */
    modifyProgressBarValue(changeVal){
        let newVal = this.state.progressBarValue + changeVal;
        if (newVal < 0)
            newVal = this.state.progressBarValue;
        var oldVal = this.state.progressBarValue;
        this.setState({
            progressBarValue: newVal
        })
        this.animate(oldVal, newVal)
    }

    /*
    function to vary the colored width of ProgressBar, it calls inner function (uses closure) for animation
     */
    animate(fromValue, toValue){
        var element = this.getProgressBarNode();
        var width = fromValue;
        var id;
        if (fromValue < toValue){
            id = setInterval(frameInc, 10);
        } else {
            id = setInterval(frameDec, 10);
        }
        function frameInc(){
            if (width > toValue) {
                clearInterval(id);
                if (width >= 100) {
                    element.style.backgroundColor = 'red';
                }
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
        function frameDec(){
            if (width < toValue) {
                clearInterval(id);
                if (width < 100) {
                    element.style.backgroundColor = "#97E2E2";
                }
            } else {
                width--;
                element.style.width = width + '%';
            }
        }

    }

    /*
    utility function to get component node
     */
    getProgressBarNode(){
        var id = `bar_${this.props.order}`;
        return document.getElementById(id);
    }

    render() {
        var barId = `bar_${this.props.order}`;
        return (
            <div className="outerBlock">
                <div id={barId} className="innerBlock">
                    <div className="text">{this.state.progressBarValue}%</div>
                </div>
            </div>
        );
    }

}

export default ProgressBar;
