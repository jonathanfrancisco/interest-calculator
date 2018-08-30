import React from 'react';


const TimeFormulaInput = (props) => {

    const {principal, totalAmount, rate, onPrincipalChange, onTotalAmountChange, onRateChange, children} = props;

    return (
        <React.Fragment>
        <label>Prinicipal Amount (P)</label>
        <input className='input' required onChange={onPrincipalChange} value={principal} name='principal' type='number' />
        <br />
        <label>Total Amount (A)</label>
        <input className='input' required onChange={onTotalAmountChange} value={totalAmount} name='amount' type='number' />
        <br />
        <label>Rate (r): % per year</label>
        <input className='input' required onChange={onRateChange} value={rate} name='rate' type='number' />
        <br />
        {children}
        </React.Fragment>
    );

}

export default TimeFormulaInput;

