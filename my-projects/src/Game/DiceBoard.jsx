import Die from "./Die";

export default function DiceBoard({ holdNum,toggleHold}) {
  const diceElements = holdNum.map((die) => (
    <Die key={die.id} num={die.num} isHeld={die.isHeld} toggleHold={toggleHold} id={die.id} />
  ));

  return (
    <div className="game__dice-board">
      {diceElements}
    </div>
  );
}
