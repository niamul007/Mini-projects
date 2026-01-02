import Die from "./Die";

export default function DiceBoard({ holdNum, setNum }) {


  const diceElements = holdNum.map((die) => (
    <Die key={die.id} num={die.num} />
  ));

  return (
    <div className="game__dice-board">
      {diceElements}
    </div>
  );
}
