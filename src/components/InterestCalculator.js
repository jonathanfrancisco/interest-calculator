
import React, {Component} from 'react';
import InputDisplay from './InputDisplay.js';
import SolveForDisplay from './SolveForDisplay.js';
import AnswerDisplay from './AnswerDisplay.js';

class InterestCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solveFor: 'interest',
            principal: NaN,
            rate: NaN,
            time: NaN,
            totalAmount: NaN
        }
        this.handleSolveForChange = this.handleSolveForChange.bind(this);
        this.handleCalculateClick = this.handleCalculateClick.bind(this);
        this.handlePrincipalChange = this.handlePrincipalChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTotalAmountChange = this.handleTotalAmountChange.bind(this);
    }

    handleSolveForChange(event) {
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        this.setState({
            solveFor: selectedOption.value
        });
        console.log(this.state.solveFor);
    }

    handleCalculateClick() {

    }

    handlePrincipalChange() {

    }

    handleRateChange() {
        
    }

    handleTimeChange() {
        
    }

    handleTotalAmountChange() {
        
    }

    render() {

        return (
            <div className='interest-calculator'>
                <SolveForDisplay onSolveForChange={this.handleSolveForChange}/>
                <InputDisplay solveFor={this.state.solveFor} />
                <AnswerDisplay />
                <button onClick={this.handleCalculateClick}>Calculate</button>
            </div>
        );
    }

}


export default InterestCalculator;


