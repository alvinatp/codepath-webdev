import React from 'react';

const Flashcard = ({ question, answer, showAnswer, onClick }) => {
  return (
    <div className="flashcard-container" onClick={onClick}>
      <div className={`flashcard ${showAnswer ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <div>{question}</div>
        </div>
        <div className="flashcard-back">
          <div>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;