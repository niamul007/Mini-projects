export default function Die({ num }) {
    return (
        <button className="game__die" >
            <span className="game__die-value">{num}</span>
        </button>
    )
}
