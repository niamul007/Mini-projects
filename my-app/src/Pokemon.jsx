// import React, { useState, useEffect } from "react";

// export default function PokeSearcher() {
//   const [search, setSearch] = useState("pikachu"); // The term we are searching for
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // --- YOUR WORK STARTS HERE ---
//     // 1. Create the 'ignore' flag
//     // 2. Set loading to true and reset error to null
//     // 3. Create an async function to fetch: `https://pokeapi.co/api/v2/pokemon/${search}`
//     // 4. Check if res.ok is false (to handle 404s)
//     // 5. If !ignore, update state and set loading to false
//     // 6. Add the cleanup function
//     // --- YOUR WORK ENDS HERE ---
//     let ignore = false;

//     setLoading(true);
//     async function fetchData() {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
//       const data = await res.json();
//       console.log(data)

//       if (!ignore) {
//         setPokemon(data);
//         setLoading(false);
//       }
//     }
//     fetchData();
//     return () => {
//       ignore = true; // "Cancel" the update permission for this fetch
//     };
//   }, [search]);

//   function handleSubmit(formData) {
//     const newSearch = formData.get("poke-name").toLowerCase();
//     setSearch(newSearch);
//   }

//   return (
//     <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
//       <h1>Poké-Searcher</h1>

//       <form action={handleSubmit}>
//         <input name="poke-name" placeholder="Enter Pokemon name..." />
//         <button type="submit">Search</button>
//       </form>

//       <hr style={{ margin: "20px 0" }} />

//       {loading && <p>Searching the tall grass...</p>}

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {pokemon && !loading && !error && (
//         <div>
//           <h2>{pokemon.name.toUpperCase()}</h2>
//           <img
//             src={pokemon.sprites.front_default}
//             alt={pokemon.name}
//             style={{ width: "150px" }}
//           />
//           <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
//         </div>
//       )}
//     </div>
//   );
// }

//senior level

import React, { useState } from "react";
import usePokemon from "./UsePokemon.jsx";

export default function PokeSearcher() {
  const [search, setSearch] = useState("pikachu");
  const { pokemon, loading, error } = usePokemon(search);

  function handleSubmit(formData) {
    const newSearch = formData.get("poke-name").toLowerCase().trim();
    if (newSearch) {
      setSearch(newSearch);
    }
  }

  return (
    /* This wrapper fills the whole screen and centers the content */
    <div style={styles.screenWrapper}>
      <div style={styles.container}>
        <header>
          <h1 style={styles.title}>Poké-Searcher</h1>
          <form action={handleSubmit} style={styles.form}>
            <input 
              name="poke-name" 
              placeholder="Ex: Mewtwo..." 
              style={styles.input} 
            />
            <button type="submit" style={styles.button}>Search</button>
          </form>
        </header>

        <main style={styles.displayArea}>
          {loading && <p style={styles.status}>Searching the tall grass...</p>}

          {error && <p style={{ ...styles.status, color: "#ff5f5f" }}>{error}</p>}

          {pokemon && !loading && (
            <div style={styles.card}>
              <span style={styles.idBadge}>#{pokemon.id}</span>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                style={styles.image}
              />
              <h2 style={styles.pokeName}>{pokemon.name}</h2>
              <div style={styles.typeBox}>
                {pokemon.types.map((t) => (
                  <span key={t.type.name} style={styles.typeTag}>
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const styles = {
  // Centers everything on the screen and sets the dark background
  screenWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#121212", // Very dark grey/black
    margin: 0,
    position: "fixed", // Ensures it covers the whole screen
    top: 0,
    left: 0
  },
  container: {
    maxWidth: "400px",
    width: "90%",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#1e1e1e", // Slightly lighter dark for the card
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    color: "#ffffff"
  },
  title: { 
    color: "#ffcb05", // Pokemon Gold color
    marginBottom: "20px",
    fontSize: "2rem" 
  },
  form: { display: "flex", gap: "8px" },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    backgroundColor: "#2d2d2d",
    color: "#fff",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ffcb05",
    color: "#000",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  displayArea: {
    marginTop: "30px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { 
    width: "180px", 
    imageRendering: "pixelated",
    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))"
  },
  pokeName: { 
    textTransform: "capitalize", 
    fontSize: "2rem", 
    margin: "10px 0",
    color: "#fff"
  },
  idBadge: { color: "#555", fontWeight: "bold", fontSize: "1.2rem" },
  typeBox: { display: "flex", gap: "8px", justifyContent: "center" },
  typeTag: {
    padding: "6px 15px",
    backgroundColor: "#333",
    color: "#ffcb05",
    borderRadius: "15px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    border: "1px solid #444"
  },
  status: { fontWeight: "bold", color: "#888" },
};