import React from 'react';


const CompoundingPeriodSelect = (props) => {
    return (
        <React.Fragment>
        <p>Compounding period</p>
        <div className='select'>
            <select required onChange={props.onPeriodChange}>
                <option value='1'>Anually</option>
                <option value='4'>Quarterly</option>
                <option value='2'>Semi-anually</option>
                <option value='12'>Monthly</option>
            </select>
        </div>
    </React.Fragment>
    );
}


export default CompoundingPeriodSelect;
