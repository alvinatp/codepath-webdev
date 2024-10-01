import React, { useState } from 'react';
import Flashcard from './Flashcard';

const CardList = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    const nextIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(nextIndex);
    setShowAnswer(false);
  };

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <Flashcard
        question={cards[currentCardIndex].question}
        answer={cards[currentCardIndex].answer}
        showAnswer={showAnswer}
        onClick={handleCardClick}
      />
      <button className="button" onClick={handleNextCard}>
        Next Card
      </button>
    </div>
  );
};

export default CardList;