import React from 'react';

const Flashcard = ({ question, answer, showAnswer, onClick }) => {
  return (
    <div className="flashcard" onClick={onClick}>
      <div>{showAnswer ? answer : question}</div>
    </div>
  );
};

export default Flashcard;