import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    calculateDiff() {
        if(this.props.date === null) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const diff_in_ms = new Date(this.props.date) - new Date();
        const seconds = Math.floor((diff_in_ms/1000) % 60);
        const minutes = Math.floor((diff_in_ms/1000/60) % 60);
        const hours = Math.floor(diff_in_ms/(1000*60*60) % 24);
        const days = Math.floor(diff_in_ms/(1000*60*60*24));

        this.setState(Object.assign({}, this.state,
            {days, hours, minutes, seconds}));
    }

    componentWillMount() {
        this.calculateDiff();
    }

    componentDidMount() {
        setInterval(() => this.calculateDiff(), 1000);
    }

    pad0(number) {
        if(number < 0 && number > -10) {
            let abs_num = Math.abs(number);
            return `-0${abs_num}`;
        } else if(number >= 0 && number < 10) {
            return `0${number}`;
        }

        return number;
    }

    render() {
        return (
            <div className="timer">
                <span className="timer-days">{this.pad0(this.state.days)}d</span>
                <span className="timer-hours">{this.pad0(this.state.hours)}h</span>
                <span className="timer-minutes">{this.pad0(this.state.minutes)}m</span>
                <span className="timer-seconds">{this.pad0(this.state.seconds)}s</span>
            </div>
        )
    }
}
