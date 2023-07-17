import React, { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array of strings
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCurrent, setIsCurrent] = useState(false);

  const formatGuess = () => {};

  const addNewGuess = () => {};

  const handleKeyUp = () => {};

  return { turn, currentGuess, guesses, isCurrent, handleKeyUp };
};

export default useWordle;
