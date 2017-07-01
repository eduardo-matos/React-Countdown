import React, { Component } from 'react';
import Timer from './Timer';
import './App.css';


export default class App extends Component {
    constructor(props) {
        super(props);

        let defaultDate = 'March 07 2018';
        this.state = {
            target: defaultDate,
            newTarget: defaultDate,
            targetDate: new Date(defaultDate)
        }
    }

    componentWillMount() {
        this.handleChangeTimer(this.state.target);
        this.handleRedefineTarget();
    }

    handleChangeTimer(val) {
        let state = Object.assign({}, this.state);
        state.newTarget = val;
        this.setState(state);
    }

    handleRedefineTarget() {
        const targetDate  = new Date(this.state.newTarget)
        let state = Object.assign({}, this.state, {
            targetDate,
            target: this.state.newTarget
        });
        this.setState(state);
    }

    render() {
        return (
            <div>
                <h1>Countdown</h1>
                <div className="target-date">{this.state.target}</div>
                <Timer date={this.state.targetDate} />
                <div className="modification-zone">
                    <input onChange={(e) => this.handleChangeTimer(e.target.value)} value={this.state.newTarget}/>
                    <button onClick={() => this.handleRedefineTarget()}>Redefine!</button>
                </div>
            </div>
        )
    }
}
