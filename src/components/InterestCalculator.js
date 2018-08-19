
import React, {Component} from 'react';
import InputDisplay from './InputDisplay.js';
import SolveForDisplay from './SolveForDisplay.js';
import AnswerDisplay from './AnswerDisplay.js';

class InterestCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solveFor: 'interest',
            principal: '',
            rate: '',
            time: '',
            totalAmount: '',
            answer: ''
        }
        this.handleSolveForChange = this.handleSolveForChange.bind(this);
        this.handlePrincipalChange = this.handlePrincipalChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTotalAmountChange = this.handleTotalAmountChange.bind(this);
        this.handleCalculateClick = this.handleCalculateClick.bind(this);
    }

    handleSolveForChange(event) {
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        this.setState({
            solveFor: selectedOption.value,
            principal: '',
            rate: '',
            time: '',
            totalAmount: ''
        });

    }

    handlePrincipalChange(e) {
        this.setState({
            principal: e.target.value
        });
    }

    handleRateChange(e) {
        this.setState({
            rate: e.target.value
        });
    }

    handleTimeChange(e) {
        this.setState({
            time: e.target.value
        });
    }

    handleTotalAmountChange(e) {
        this.setState({
            totalAmount: e.target.value
        });
    }

    handleCalculateClick() {

        if(this.state.solveFor === 'interest') {
            const {principal, rate, time} = this.state;
            const interest = (principal * (rate/100) * time);
           this.setState({
               answer: interest
           });
        }

        else if(this.state.solveFor === 'principal') {
            const {totalAmount, rate, time} = this.state;
            const principal = (totalAmount / (1+((rate/100)*time)));
            this.setState({
                answer: principal
            });
        }

        else if(this.state.solveFor === 'rate') {
            const {time, totalAmount, principal} = this.state;
            const rate = (1/time) * ((totalAmount / principal) - 1);
           
            this.setState({
                answer: rate.toFixed(2)+ '%'
            });
        }

        else if(this.state.solveFor === 'time') {
            const {rate, totalAmount, principal}  = this.state;
            const time = (1/(rate/100)) * ((totalAmount / principal) - 1);
            this.setState({
                answer: time
            });
        }

    }


    render() {

        return (
            <div className='interest-calculator'>
                <SolveForDisplay onSolveForChange={this.handleSolveForChange}/>
                <InputDisplay solveFor={this.state.solveFor}
                              principal={this.state.principal}
                              rate={this.state.rate}
                              time={this.state.time}
                              totalAmount={this.state.totalAmount}
                              onPrincipalChange={this.handlePrincipalChange}
                              onRateChange={this.handleRateChange}
                              onTimeChange={this.handleTimeChange}
                              onTotalAmountChange={this.handleTotalAmountChange}
                />
                <AnswerDisplay answer={this.state.answer} />
                <button onClick={this.handleCalculateClick}>Calculate</button>
            </div>
        );
    }

}


export default InterestCalculator;


