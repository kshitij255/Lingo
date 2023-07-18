import React, { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array of strings
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCurrent, setIsCurrent] = useState(false);

  const formatGuess = () => {
    console.log("formatGuess", currentGuess);
  };

  const addNewGuess = () => {};

  //handle keyup event and track current guess
  // if user presses enter add new guess
  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      //only add new guess if turn is less than 5
      if (turn > 5) {
        console.log("used all guesses");
        return;
      }
      //do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("already tried that word");
        return;
      }
      // check word is 5 chars long
      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars long");
        return;
      }
      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCurrent, handleKeyUp };
};

export default useWordle;
