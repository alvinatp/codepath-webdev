import React, { useState } from "react";
import CardList from "./CardList";

const App = () => {
  const [cards] = useState([
    {
      id: 1,
      question: "What does CPU stand for?",
      answer: "Central Processing Unit",
      image: "src/images/oop.png",
      difficulty: "easy",
    },
    {
      id: 2,
      question: "What is the time complexity of a binary search?",
      answer: "O(log n)",
      difficulty: "medium",
    },
    {
      id: 3,
      question: "Explain the concept of recursion.",
      answer:
        "Recursion is a programming concept where a function calls itself to solve a problem by breaking it down into smaller, similar sub-problems.",
      image: "src/images/recursion.jpg",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "What is a data structure?",
      answer:
        "A data structure is a way of organizing and storing data for efficient access and modification.",
      difficulty: "easy",
    },
    {
      id: 5,
      question: "What is the difference between stack and heap memory?",
      answer:
        "Stack is used for static memory allocation and is faster, while heap is used for dynamic memory allocation and is slower but more flexible.",
      difficulty: "medium",
    },
  ]);

  return (
    <div className="container">
      <h1>Computer Science Flashcards</h1>
      <p className="description">
        Test your knowledge of computer science concepts!
      </p>
      <p className="description">Total cards: {cards.length}</p>
      <CardList cards={cards} />
    </div>
  );
};

export default App;
