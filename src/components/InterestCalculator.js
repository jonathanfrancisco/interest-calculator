
import React, {Component} from 'react';
import InputDisplay from './InputDisplay.js';
import SolveForDisplay from './SolveForDisplay';

class InterestCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solveFor: 'interest'
        }
        this.handleSolveForChange = this.handleSolveForChange.bind(this);
    }

    handleSolveForChange(event) {
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        this.setState({
            solveFor: selectedOption.value
        });
        console.log(this.state.solveFor);
    }


    render() {

        return (
            <div className='interest-calculator'>
                <SolveForDisplay onSolveForChange={this.handleSolveForChange}/>
                <InputDisplay solveFor={this.state.solveFor} />
            </div>
        );
    }

}


export default InterestCalculator;


