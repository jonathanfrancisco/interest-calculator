import React from 'react';
import './AnswerDisplay.css';

const AnswerDisplay  = (props) => {
    return (
        <div className='interest-calculator__answer-display'>
          <h4 className="title is-4">Answer:</h4>
          <h5 className="subtitle is-5">{props.answer}</h5>
        </div>
    );
}

export default AnswerDisplay;

