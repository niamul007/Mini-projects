import React, { useState } from "react";

export default function SecretToggle() {
  // 1. CREATE STATE HERE:
  // Create a state variable called 'isVisible' and set its default to false.

  const [isVisible, setIsVisible] = useState(false);

  const change = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div style={styles.screen}>
      <div style={styles.card}>
        <h2>Top Secret File</h2>
        <p>This is public information that everyone can see.</p>

        {/* 2. CONDITIONAL RENDERING HERE:
            Write the logic so that the <div> below ONLY shows up 
            if 'isVisible' is true. 
            (Hint: Use the && operator) */}

        {isVisible && (
          <div style={styles.secret}>
            🕵️‍♂️ The secret password is: <strong>"Bana77"</strong>
          </div>
        )}

        {/* 3. THE TOGGLE BUTTON:
            - Add an 'onClick' that flips 'isVisible' from true to false (or false to true).
            - Change the text inside the button so it says "Hide" if visible, 
              and "Show" if hidden. */}
        <button style={styles.button} onClick={change}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  screen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#121212",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    textAlign: "center",
    color: "white",
    border: "1px solid #333",
  },
  secret: {
    backgroundColor: "#2d2d2d",
    padding: "15px",
    borderRadius: "8px",
    margin: "20px 0",
    border: "1px dashed #ffcb05",
    color: "#ffcb05",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ffcb05",
    color: "black",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
