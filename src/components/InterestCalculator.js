
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
            totalAmount: ''
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
                <AnswerDisplay />
                <button onClick={this.handleCalculateClick}>Calculate</button>
            </div>
        );
    }

}


export default InterestCalculator;


