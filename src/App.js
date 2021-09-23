import "./styles.css";
import React, { useState } from "react";

const animalDictionary = {
  "🐒": "monkey",
  "🐕": "dog",
  "🐈": "cat",
  "🐅": "tiger",
  "🐆": "leopard",
  "🐎": "horse",
  "🦌": "deer",
  "🐂": "ox",
  "🐃": "water buffalo",
  "🐄": "cow",
  "🐖": "pig",
  "🐪": "camel",
  "🐐": "goat",
  "🐫": "two-hump camel"
};

var animalWeKnow = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    //updated the state here
    var userInput = event.target.value;
    var meaning = animalDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function animalClickHandler(animal) {
    var meaning = animalDictionary[animal];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Animal Interpreter</h1>
      <input
        onChange={animalInputHandler}
        placeholder="Enter the animal emoji or select from the list given below."
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          padding: "1rem",
          width: "70%"
        }}
      />

      <h2>{meaning}</h2>
      <h3>animals we know</h3>

      {animalWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={animal}
          >
            {animal}{" "}
          </span>
        );
      })}
    </div>
  );
}
