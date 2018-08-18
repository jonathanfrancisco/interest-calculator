


import React from 'react';


const InputDisplay = (props) => {
   
    console.log('Wat: ',props.solveFor);

    if(props.solveFor === 'interest')
        return (
            <div className='interst-calculator__input-display'>
                <label>Prinicipal Amount (P)</label>
                <input name='principal' type='number' />
                <br />
                <label>Rate (r): % per year</label>
                <input name='rate' type='number' />
                <br />
                <label>Time (t) in years</label>
                <input name='time' type='number' />
            </div>
        );
    else if(props.solveFor === 'principal')
        return (
            <div className='interest-calculator__input-display'>
                <label>Total Amount (A)</label>
                <input name='amount' type='number' />
                <br />
                <label>Rate (r): % per year</label>
                <input name='rate' type='number' />
                <br />
                <label>Time (t) in years</label>
                <input name='time' type='number' />
            </div>
        );
    else if(props.solveFor === 'rate')
        return (
            <div className='interest-calculator__input-display'>
                <label>Prinicipal Amount (P)</label>
                <input name='principal' type='number' />
                <br />
                <label>Total Amount (A)</label>
                <input name='amount' type='number' />
                <br />
                <label>Time (t) in years</label>
                <input name='time' type='number' />
            </div>
        );
    else if(props.solveFor === 'time')
        return (
            <div className='interest-calculator__input-display'>
                <label>Prinicipal Amount (P)</label>
                <input name='principal' type='number' />
                <br />
                <label>Total Amount (A)</label>
                <input name='amount' type='number' />
                <br />
                <label>Rate (r): % per year</label>
                <input name='rate' type='number' />
                <br />
            </div>
        );
}

export default InputDisplay;