// import React from "react";
// import { useState } from "react";

// export default function HighLow() {
//   const [number, setNumber] = useState(0);

//   function generateRandomNum() {
//     const random = Math.floor(Math.random() * 10 + 1);
//     setNumber(random);
//   }

// // 1. React passes the FormData object directly to the action function
// function submit(formData) {
//   // 2. No need for e.preventDefault(); React handles it
  
//   // 3. Use the .get() method to retrieve values by input 'name'
//   const userGuess = Number(formData.get('guess'));
  
//   console.log(userGuess);
  
//   if (userGuess < number) {
//     alert("Your guess is too low!");
//   } else if (userGuess > number) {
//     alert("Your guess is too high!");
//   } else {
//     alert("Congratulations! You guessed it right!");
//   }
// }

// // Usage in your component:
// // <form action={submit}>
// //   <input name="guess" type="number" />
// //   <button type="submit">Check</button>
// // </form>


//   return (
//     <div>
//       <h1>High Low Game</h1>
//       <p>
//         Welcome to the High Low game! Guess if the next number will be higher or
//         lower.
//       </p>
//       <div>
//         <h2>{number}</h2>
//         <form action={submit}>
//           <input type="number" name="guess" id="" />
//           <button type="submit"> Submit</button>
//         </form>
//       </div>
//       <button onClick={generateRandomNum}>Roll</button>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function HighLow() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Will the next number be Higher or Lower?");

  // This is the core logic function
  function handleGuess(guess) {
    const nextNum = Math.floor(Math.random() * 10) + 1;
    
    if (guess === "higher") {
      if (nextNum > number) {
        setScore(score + 1);
        setMessage(`Correct! ${nextNum} is higher than ${number}.`);
      } else {
        setScore(0);
        setMessage(`Wrong! ${nextNum} is not higher than ${number}. Score reset!`);
      }
    }

    if (guess === "lower") {
      if (nextNum < number) {
        setScore(score + 1);
        setMessage(`Correct! ${nextNum} is lower than ${number}.`);
      } else {
        setScore(0);
        setMessage(`Wrong! ${nextNum} is not lower than ${number}. Score reset!`);
      }
    }

    // Crucial step: The "next" number becomes the "current" number
    setNumber(nextNum);
  }

  // Simple Styles
  const styles = {
    container: { textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px', color: '#333' },
    card: { fontSize: '6rem', margin: '20px', padding: '20px', background: '#f0f0f0', borderRadius: '15px', display: 'inline-block', minWidth: '150px' },
    button: { padding: '10px 20px', fontSize: '1rem', margin: '10px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold' },
    score: { fontSize: '1.5rem', color: '#28a745' }
  };

  return (
    <div style={styles.container}>
      <h1>Higher or Lower</h1>
      <p style={styles.score}>Current Score: {score}</p>
      
      <div style={styles.card}>{number}</div>
      
      <p>{message}</p>
      
      <div>
        <button style={styles.button} onClick={() => handleGuess("higher")}>HIGHER ↑</button>
        <button style={{...styles.button, backgroundColor: '#dc3545'}} onClick={() => handleGuess("lower")}>LOWER ↓</button>
      </div>

      <button 
        style={{marginTop: '40px', background: 'none', border: '1px solid #ccc', cursor: 'pointer'}} 
        onClick={() => {setScore(0); setNumber(5); setMessage("Game Reset!")}}
      >
        Reset Game
      </button>
    </div>
  );
}