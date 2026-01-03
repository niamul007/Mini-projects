export default function Die({ num , isHeld, toggleHold,id }) {
    return (
        <button className="game__die" style={{backgroundColor: isHeld ? "#59E391" : "white"}} onClick={()=> toggleHold(id)}>
            <span className="game__die-value">{num}</span>
        </button>
    )
}


