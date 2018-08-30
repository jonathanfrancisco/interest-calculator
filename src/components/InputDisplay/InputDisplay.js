
import React from 'react';

// COMPONENTS
import InterestFormulaInput from '../InterestFormulaInput/InterestFormulaInput.js';
import PrincipalFormulaInput from '../PrincipalFormulaInput/PrincipalFormulaInput.js';
import RateFormulaInput from '../RateFormulaInput/RateFormulaInput.js';
import TimeFormulaInput from '../TimeFormulaInput/TimeFormulaInput.js';

// CSS 
import './InputDisplay.css';

const InputDisplay = (props) => {

    // VALUES
    const {principal, rate, time, totalAmount} = props;

    // HANDLERS
    const {onPrincipalChange, onRateChange, onTimeChange, onTotalAmountChange} = props;
   
    if(props.solveFor === 'interest' || props.solveFor === 'totalAmount')
        return (
            <div className='interest-calculator__input-display'>
                <InterestFormulaInput principal={principal} 
                                    rate={rate} time={time} 
                                    onPrincipalChange={onPrincipalChange}
                                    onRateChange={onRateChange}
                                    onTimeChange={onTimeChange} />
            </div>
        );
    else if(props.solveFor === 'principal')
        return (
            <div className='interest-calculator__input-display'>
               <PrincipalFormulaInput totalAmount={totalAmount}
                                    rate={rate}
                                    time={time}
                                    onTotalAmountChange={onTotalAmountChange}
                                    onRateChange={onRateChange}
                                    onTimeChange={onTimeChange} />
            </div>
        );
    else if(props.solveFor === 'rate')
        return (
            <div className='interest-calculator__input-display'>
                <RateFormulaInput principal={principal}
                                totalAmount={totalAmount}
                                time={time}
                                onPrincipalChange={onPrincipalChange}
                                onTotalAmountChange={onTotalAmountChange}
                                onTimeChange={onTimeChange} />
            </div>
        );
    else if(props.solveFor === 'time')
        return (
            <div className='interest-calculator__input-display'>
              <TimeFormulaInput principal={principal}
                                totalAmount={totalAmount}
                                rate={rate}
                                onPrincipalChange={onPrincipalChange}
                                onTotalAmountChange={onTotalAmountChange}
                                onRateChange={onRateChange} />
            </div>
        );
}

export default InputDisplay;