


import React from 'react';


const InputDisplay = (props) => {

    // values
    const {principal, rate, time, totalAmount} = props;

    // handlers
    const {onPrincipalChange, onRateChange, onTimeChange, onTotalAmountChange} = props;
   
    if(props.solveFor === 'interest')
        return (
            <div className='interst-calculator__input-display'>
                <label>Prinicipal Amount (P)</label>
                <input required onChange={onPrincipalChange} value={principal} name='principal' type='number' />
                <br />
                <label>Rate (r): % per year</label>
                <input required onChange={onRateChange} value={rate} name='rate' type='number' />
                <br />
                <label>Time (t) in years</label>
                <input required onChange={onTimeChange} value={time} name='time' type='number' />
            </div>
        );
    else if(props.solveFor === 'principal')
        return (
            <div className='interest-calculator__input-display'>
                <label>Total Amount (A)</label>
                <input required onChange={onTotalAmountChange} value={totalAmount}name='amount' type='number' />
                <br />
                <label>Rate (r): % per year</label>
                <input required onChange={onRateChange} value={rate} name='rate' type='number' />
                <br />
                <label>Time (t) in years</label>
                <input required onChange={onTimeChange} value={time} name='time' type='number' />
            </div>
        );
    else if(props.solveFor === 'rate')
        return (
            <div className='interest-calculator__input-display'>
                <label>Prinicipal Amount (P)</label>
                <input required onChange={onPrincipalChange} value={principal} name='principal' type='number' />
                <br />
                <label>Total Amount (A)</label>
                <input required onChange={onTotalAmountChange} value={totalAmount}name='amount' type='number' />
                <br />
                <label>Time (t) in years</label>
                <input required onChange={onTimeChange} value={time}name='time' type='number' />
            </div>
        );
    else if(props.solveFor === 'time')
        return (
            <div className='interest-calculator__input-display'>
                <label>Prinicipal Amount (P)</label>
                <input required onChange={onPrincipalChange} value={principal} name='principal' type='number' />
                <br />
                <label>Total Amount (A)</label>
                <input required onChange={onTotalAmountChange} value={totalAmount} name='amount' type='number' />
                <br />
                <label>Rate (r): % per year</label>
                <input required onChange={onRateChange} value={rate} name='rate' type='number' />
                <br />
            </div>
        );
}

export default InputDisplay;