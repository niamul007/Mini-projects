import GameHeader from "./GameHeader";
import DiceBoard from "./DiceBoard";
import GameControls from "./GameControls";
import "./game.css";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

export default function Game() {
  const [holdNum, setNum] = useState(() => generateDice());
  const buttonRef = useRef(null);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [holdNum]);

  const gameWon = holdNum.every(
    (die) => die.isHeld && die.num === holdNum[0].num
  );

  function generateDice() {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push({
        id: nanoid(),
        num: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return numbers;
  }

const roll = () => {
  if (!gameWon) {
    // 1. If we HAVEN'T won yet, roll the dice that aren't held
    setNum(prevNum => prevNum.map(die => {
      return die.isHeld 
        ? die 
        : { ...die, num: Math.floor(Math.random() * 6) + 1 };
    }));
  } else {
    // 2. If we HAVE won, reset the game for a new round
    setNum(generateDice());
  }
};

  function toggleHold(id) {
    setNum((prevNum) =>
      prevNum.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
    console.log(id);
  }

  return (
    <section className="game">
      <GameHeader />
      <DiceBoard
        key={holdNum}
        holdNum={holdNum}
        setNum={setNum}
        toggleHold={toggleHold}
      />
      <GameControls roll={roll} holdNum={holdNum} buttonRef={buttonRef} />
    </section>
  );
}
