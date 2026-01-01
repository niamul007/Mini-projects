import React, { useState } from "react";

export default function PasswordValidator() {
  const [password, setPassword] = useState("");

  // --- YOUR LOGIC STARTS HERE ---
  const hasEightChars = password.length >= 8;
  const hasNumber = /\d/.test(password); // Regex: checks for a digit
  const hasSpecial = /[!@#$%^&*]/.test(password); // Checks for special chars
  // --- YOUR LOGIC ENDS HERE ---

  return (
    <div style={styles.screen}>
      <div style={styles.card}>
        <h2 style={{ color: "#ffcb05" }}>Vault Security</h2>
        
        <input
          type="password"
          placeholder="Set your password..."
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={styles.rules}>
          <Rule label="8+ Characters" met={hasEightChars} />
          <Rule label="Includes a Number" met={hasNumber} />
          <Rule label="Special Character" met={hasSpecial} />
        </div>
      </div>
    </div>
  );
}

// A small sub-component for the rules
function Rule({ label, met }) {
  return (
    <div style={{ color: met ? "#4ade80" : "#ef4444", margin: "10px 0" }}>
      {met ? "✅" : "❌"} {label}
    </div>
  );
}

const styles = {
  screen: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#121212" },
  card: { backgroundColor: "#1e1e1e", padding: "30px", borderRadius: "15px", width: "320px", textAlign: "center", color: "white" },
  input: { width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #333", backgroundColor: "#2d2d2d", color: "white", outline: "none", marginBottom: "20px" },
  rules: { textAlign: "left" }
};