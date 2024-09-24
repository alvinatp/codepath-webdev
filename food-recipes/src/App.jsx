import React, { useState } from "react";
import { AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import "./App.css";

const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    prepTime: "20 mins",
    difficulty: "Easy",
    url: "https://damndelicious.net/2014/03/29/spaghetti-carbonara/",
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    cuisine: "Indian",
    prepTime: "40 mins",
    difficulty: "Medium",
    url: "https://www.example.com/chicken-tikka-masala",
  },
  {
    id: 3,
    name: "Beef Tacos",
    cuisine: "Mexican",
    prepTime: "30 mins",
    difficulty: "Easy",
    url: "https://www.example.com/beef-tacos",
  },
  {
    id: 4,
    name: "Sushi Rolls",
    cuisine: "Japanese",
    prepTime: "60 mins",
    difficulty: "Hard",
    url: "https://www.example.com/sushi-rolls",
  },
  {
    id: 5,
    name: "Greek Salad",
    cuisine: "Greek",
    prepTime: "15 mins",
    difficulty: "Easy",
    url: "https://www.example.com/greek-salad",
  },
  {
    id: 6,
    name: "Pad Thai",
    cuisine: "Thai",
    prepTime: "35 mins",
    difficulty: "Medium",
    url: "https://www.example.com/pad-thai",
  },
  {
    id: 7,
    name: "Beef Bourguignon",
    cuisine: "French",
    prepTime: "180 mins",
    difficulty: "Hard",
    url: "https://www.example.com/beef-bourguignon",
  },
  {
    id: 8,
    name: "Fish and Chips",
    cuisine: "British",
    prepTime: "45 mins",
    difficulty: "Medium",
    url: "https://www.example.com/fish-and-chips",
  },
  {
    id: 9,
    name: "Falafel Wrap",
    cuisine: "Middle Eastern",
    prepTime: "40 mins",
    difficulty: "Medium",
    url: "https://www.example.com/falafel-wrap",
  },
  {
    id: 10,
    name: "Apple Pie",
    cuisine: "American",
    prepTime: "90 mins",
    difficulty: "Medium",
    url: "https://www.example.com/apple-pie",
  },
];

const RecipeCard = ({ name, cuisine, prepTime, difficulty, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="recipe-card">
      <h2>{name}</h2>
      <p>{cuisine} Cuisine</p>
      <p>Prep Time: {prepTime}</p>
      <p>Difficulty: {difficulty}</p>
      <button
        className="view-recipe"
        onClick={() => window.open(url, "_blank")}
      >
        View Full Recipe
      </button>
      <button className="expand-btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isExpanded && (
        <div className="expanded-content">
          <p>
            This delicious {cuisine.toLowerCase()} dish is perfect for{" "}
            {difficulty.toLowerCase()} cooks.
          </p>
          <p>
            With a prep time of {prepTime}, it's a great choice for{" "}
            {prepTime.includes("mins") ? "quick meals" : "special occasions"}.
          </p>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <div className="container">
    <h1>Community Recipe Board</h1>
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
    <div className="footer">
      <AlertCircle className="alert-icon" />
      <span>Click on "View Full Recipe" to see detailed instructions.</span>
    </div>
  </div>
);

export default App;
