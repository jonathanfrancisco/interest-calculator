import React from 'react';

const RateFormulaInput = (props) => {

    const {principal, totalAmount, time, onPrincipalChange, onTotalAmountChange, onTimeChange, children} = props;
    
    return (
        <React.Fragment>
        <label>Prinicipal Amount (P)</label>
        <input className='input' required onChange={onPrincipalChange} value={principal} name='principal' type='number' />
        <br />
        <label>Total Amount (A)</label>
        <input className='input' required onChange={onTotalAmountChange} value={totalAmount}name='amount' type='number' />
        <br />
        <label>Time (t) in years</label>
        <input className='input' required onChange={onTimeChange} value={time}name='time' type='number' />
        {children}
        </React.Fragment>
    );

}

export default RateFormulaInput;

