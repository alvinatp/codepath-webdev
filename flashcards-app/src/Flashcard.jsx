import React from 'react';

const Flashcard = ({ question, answer, image, difficulty, showAnswer, onClick }) => {
  return (
    <div className="flashcard-container" onClick={onClick}>
      <div className={`flashcard ${difficulty} ${showAnswer ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <div className="flashcard-content">
            {image && <img src={image} alt="Flashcard" className="flashcard-image" />}
            <div className="flashcard-question">{question}</div>
          </div>
          <div className="flashcard-difficulty">{difficulty}</div>
        </div>
        <div className="flashcard-back">
          <div className="flashcard-content">
            <div className="flashcard-answer">{answer}</div>
          </div>
          <div className="flashcard-difficulty">{difficulty}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;