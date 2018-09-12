
import React, {Component} from 'react';

// COMPONENTS
import InputDisplay from '../InputDisplay/InputDisplay.js';
import Settings from '../Settings/Settings.js';
import AnswerDisplay from '../AnswerDisplay/AnswerDisplay.js';

// CSS
import '../../bulma.css';
import './InterestCalculator.css';


class InterestCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            solveFor: 'interest',
            principal: '',
            rate: '',
            time: '',
            totalAmount: '',
            period: NaN,
            answer: ''
        }
        this.handleChangeMode = this.handleChangeMode.bind(this);
        this.handleSolveForChange = this.handleSolveForChange.bind(this);
        this.handlePrincipalChange = this.handlePrincipalChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTotalAmountChange = this.handleTotalAmountChange.bind(this);
        this.handlePeriodChange = this.handlePeriodChange.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
    }


    componentDidMount() {
        this.setState({
            mode: 'simple',
            period: 1
        });
    }

    handleChangeMode(e) {
        this.setState({
            mode: e.target.value
        });
    }

    handleSolveForChange(event) {
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        this.setState({
            solveFor: selectedOption.value,
            principal: '',
            rate: '',
            time: '',
            totalAmount: '',
            answer: ''
        });
    }

    handlePeriodChange(e) {
        const select = e.target;
        const selectedOption = select.options[select.selectedIndex];
        this.setState({
            period: selectedOption.value
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

    handleCalculate(e) {

        e.preventDefault();

        if(this.state.mode === 'simple') {

            if(this.state.solveFor === 'interest') {
                const {principal, rate, time} = this.state;
                const interest = (principal * (rate/100) * time);
                this.setState({
                    answer: interest
                });
            }

            else if(this.state.solveFor === 'totalAmount') {
                const {principal, rate, time} = this.state;
                const totalAmount = (principal * (1+((rate/100) * time)));
                this.setState({
                    answer: totalAmount
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
                const rate = (1/time) * ((totalAmount / principal) - 1) * 100;
                this.setState({
                    answer: rate.toFixed(2)+ '%'
                });
            }

            else if(this.state.solveFor === 'time') {
                const {rate, totalAmount, principal}  = this.state;
                const time = (1/(rate/100)) * ((totalAmount / principal) - 1);
                this.setState({
                    answer: time+' year(s)'
                });
            }

        }

        else if(this.state.mode === 'compound') {

            if(this.state.solveFor === 'interest') {
                const {principal, rate, time, period} = this.state;
                const totalAmount =  principal * Math.pow((1+ ((rate/100)/period)),(period * time));
                const p = totalAmount / Math.pow(1 + ((rate/100) / period), (period*time));
                const interest = totalAmount - p;
                this.setState({
                    answer: interest.toFixed(2)
                });
            }
            
            else if(this.state.solveFor === 'totalAmount') {
                const {principal, rate, time, period} = this.state;
                const totalAmount =  principal * Math.pow((1+ ((rate/100)/period)),(period * time));
                this.setState({
                    answer: totalAmount.toFixed(2)
                });
            }   

            else if(this.state.solveFor === 'principal') {
                const {totalAmount, rate, period, time} = this.state;
                const principal = totalAmount / Math.pow(1 + ((rate/100) / period), (period*time));
                this.setState({
                    answer: Math.round(principal)
                });
            }

            else if(this.state.solveFor === 'rate') {
                const {principal, totalAmount, time, period} = this.state;
                const rate = period * ((Math.pow((totalAmount / principal), (1/(period/time)))) - 1);
                this.setState({
                    answer: Math.round(rate)+'%'
                });
            }

            else if(this.state.solveFor === 'time') {
                const {principal, totalAmount, rate, period} = this.state;
                const time = Math.log(totalAmount / principal) / (period * ( Math.log(1+((rate/100) / period))));
                this.setState({
                    answer: Math.round(time) + ' year(s)'
                });
            }

        }

    }

    render() {
        return (
            <div className='interest-calculator card'>
                <div className='card-content'>
                    <form onSubmit={this.handleCalculate}>
                        <Settings mode={this.state.mode} onChangeMode={this.handleChangeMode} onSolveForChange={this.handleSolveForChange}/>
                        <InputDisplay mode={this.state.mode}
                                    solveFor={this.state.solveFor}
                                    principal={this.state.principal}
                                    rate={this.state.rate}
                                    time={this.state.time}
                                    totalAmount={this.state.totalAmount}
                                    onPrincipalChange={this.handlePrincipalChange}
                                    onRateChange={this.handleRateChange}
                                    onTimeChange={this.handleTimeChange}
                                    onTotalAmountChange={this.handleTotalAmountChange}
                                    onPeriodChange={this.handlePeriodChange}
                        />
                        <AnswerDisplay answer={this.state.answer} />
                        <input className='button is-link' type="submit" value="Calculate"></input>
                    </form>
                </div>
            </div>
        );
    }

}


export default InterestCalculator;


