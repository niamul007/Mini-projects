import GameHeader from "./GameHeader";
import DiceBoard from "./DiceBoard";
import GameControls from "./GameControls";
import "./game.css";
import { useState } from "react";

export default function Game() {

  const generateDice = () => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push({
        id: crypto.randomUUID(),
        num: Math.floor(Math.random() * 6) + 1,
        isHeld: false
      });
    }
    return numbers;
  };

  const [holdNum, setNum] = useState(generateDice);

  const roll = () => {
    setNum(generateDice);
  };

  return (
    <section className="game">
      <GameHeader />
      <DiceBoard key={holdNum} holdNum={holdNum} setNum={setNum} />
      <GameControls roll={roll} />
    </section>
  );
}
