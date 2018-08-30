

import React from 'react';


const PrincipalFormulaInput = (props) => {

    const {totalAmount, rate, time, onTotalAmountChange, onRateChange, onTimeChange, children} = props;

    return (
        <React.Fragment>
        <label>Total Amount (A)</label>
        <input className='input' required onChange={onTotalAmountChange} value={totalAmount}name='amount' type='number' />
        <br />
        <label>Rate (r): % per year</label>
        <input className='input' required onChange={onRateChange} value={rate} name='rate' type='number' />
        <br />
        <label>Time (t) in years</label>
        <input className='input' required onChange={onTimeChange} value={time} name='time' type='number' />  
        {children}
        </React.Fragment>
    );

}

export default PrincipalFormulaInput;