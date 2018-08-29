import React from 'react';



const Settings = (props) => {
    return (
        <React.Fragment>
        <p>Solve for:</p>
        <div className='interest-calculator__solve-for-display select'>
            <select onChange={props.onSolveForChange}>
                <option value='interest'>Interest (I)</option>
                <option value='totalAmount'>Total Amount (A)</option>
                <option value='principal'>Principal (P)</option>
                <option value='rate'>Rate (r)</option>
                <option value='time'>Time (t)</option>
            </select>
        </div>
        </React.Fragment>
    );
}


export default Settings;