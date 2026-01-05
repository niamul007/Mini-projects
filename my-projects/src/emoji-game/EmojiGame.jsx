import React, { useState } from "react";
import { useEffect } from "react";
export default function EmojiGame() {
  const [activeHole, setActiveHole] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(30);
  // 2. state: score (how many bugs you've smashed)
  // 3. state: timeLeft (a countdown from 30 to 0)
  const [isActive, setIsActive] = useState(false);
  // HELPER: An array of 9 items to create the grid
  const holes = Array(9).fill(null);

  function randomHole() {
    const rand = Math.floor(Math.random() * 9);
    setActiveHole(rand);
  }

  function startGame() {
    randomHole();
    setIsActive(true);
    setTimeLeft(30);
    setScore(0);
  }
  // 1. Create a function to handle the smash
  function smashBug() {
    setScore((prev) => prev + 1); // Functional update for safety
    setActiveHole(null); // Make the bug disappear immediately after clicking!
  }

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
        randomHole();
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Bug Smasher</h1>
        <div style={styles.stats}>
          <div>
            Score: <span>{score}</span>
          </div>
          <div>
            Time: <span>{timeLeft}s</span>
          </div>
        </div>
      </div>

      <div style={styles.grid}>
        {holes.map((_, index) => (
          <div key={index} style={styles.hole}>
            {activeHole === index && timeLeft > 0 && (
              <button style={styles.bug} onClick={smashBug}>
                🪲
              </button>
            )}
          </div>
        ))}
      </div>

      <button style={styles.startBtn} onClick={startGame}>
        Start Hunting
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#1a2e1a",
    minHeight: "100vh",
    color: "white",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  header: { textAlign: "center", marginBottom: "30px" },
  stats: {
    display: "flex",
    gap: "40px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    background: "#3e5c3e",
    padding: "20px",
    borderRadius: "15px",
    border: "8px solid #2d422d",
  },
  hole: {
    width: "100px",
    height: "100px",
    backgroundColor: "#1a2e1a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "inset 0 10px 20px rgba(0,0,0,0.5)",
  },
  bug: {
    fontSize: "3rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.1s",
  },
  startBtn: {
    marginTop: "30px",
    padding: "15px 40px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#f1c40f",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
