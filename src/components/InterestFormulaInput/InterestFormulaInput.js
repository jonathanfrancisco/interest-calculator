import React from 'react';

const InterestFormulaInput = (props) => { 

    const {principal, rate, time, onPrincipalChange, onRateChange, onTimeChange, children} = props;

    return (
        <React.Fragment>
        <label>Prinicipal Amount (P)</label>
        <input className='input' required onChange={onPrincipalChange} value={principal} name='principal' type='number' />
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

export default InterestFormulaInput;