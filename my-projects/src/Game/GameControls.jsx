export default function GameControls( { roll } ) {
    return (
        <div className="game__controls">
            <button className="game__roll-btn" onClick={roll}>
                Roll
            </button>
        </div>
    )
}
