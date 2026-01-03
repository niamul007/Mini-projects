export default function GameControls( { roll, holdNum, buttonRef } ) {
    return (
        <div className="game__controls">
            <button className="game__roll-btn" onClick={roll} ref={buttonRef}>
                {    holdNum.every((die) => die.isHeld && die.num === holdNum[0].num)
                    ? "New Game"
                    : "Roll Dice"
                }
            </button>
        </div>
    )
}
