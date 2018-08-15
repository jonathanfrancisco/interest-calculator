import React from 'react';



const SolveForDisplay = (props) => {
    return (
        <div className='interest-calculator__solve-for-display'>
            <label>Solve for:</label>
            <select onChange={props.onSolveForChange}>
                <option value='interest'>Interest (I)</option>
                <option value='principal'>Principal (P)</option>
                <option value='rate'>Rate (r)</option>
                <option value='time'>Time (t)</option>
            </select>
        </div>
    );
}


export default SolveForDisplay;