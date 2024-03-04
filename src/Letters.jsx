import React, { useState } from "react";

const Letters = () => {
  const [disable, setDisabled] = useState([]);

  const handleClick = (event) => {
    {
      console.log(event.target.textContent);
    }
    const letter = event.target.textContent;

    setDisabled([...disable, letter]);
  };

  const lettersArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="container letters">
      {lettersArr.map((letter) => (
        <button
          onClick={handleClick}
          key={letter}
          className="letter"
          disabled={disable.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
