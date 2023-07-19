import React from "react";
import Row from "./Row";

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess}></Row>;
        }
        return <Row key={index} guess={guess}></Row>;
      })}
    </div>
  );
};

export default Grid;
