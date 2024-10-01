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

  const currentCard = cards[currentCardIndex];

  return (
    <div>
      <Flashcard
        question={currentCard.question}
        answer={currentCard.answer}
        image={currentCard.image}
        difficulty={currentCard.difficulty}
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