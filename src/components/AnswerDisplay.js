



import React from 'react';


const AnswerDisplay  = (props) => {
    return (
        <div className='interest-calculator__answer-display'>
            <h2>Answer:</h2>
            <p>{props.answer}</p>
        </div>
    );
}

export default AnswerDisplay;

