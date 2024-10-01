import React, { useState } from 'react';
import CardList from './CardList';

const App = () => {
  const [cards] = useState([
    { id: 1, question: "What does CPU stand for?", answer: "Central Processing Unit" },
    { id: 2, question: "What is the time complexity of a binary search?", answer: "O(log n)" },
    { id: 3, question: "What does OOP stand for?", answer: "Object-Oriented Programming" },
    { id: 4, question: "What is a data structure?", answer: "A way of organizing and storing data" },
    { id: 5, question: "What is an algorithm?", answer: "A step-by-step procedure for solving a problem" },
  ]);

  return (
    <div className="container">
      <h1>Computer Science Flashcards</h1>
      <p className="description">Test your knowledge of computer science concepts!</p>
      <p className="description">Total cards: {cards.length}</p>
      <CardList cards={cards} />
    </div>
  );
};

export default App;