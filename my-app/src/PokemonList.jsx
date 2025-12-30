import React, { useState, useEffect } from "react";

export default function PokeList() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch the list of 151 Pokemon here
    // 2. Save 'data.results' to allPokemon state
    // 3. Set loading to false
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        if (!res.ok) throw new Error("Pokemon not found");
        const data = await res.json();
        console.log(data);
        setAllPokemon(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setAllPokemon(null);
        }
      }
    }
    fetchData();
  }, [searchTerm]);

  // 4. SENIOR MOVE: Filter the list in the render body (not in an effect!)
  const filteredPokemon = allPokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.screenWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Kanto Poké-Dex</h1>

        <input
          placeholder="Search Pokemon..."
          style={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div style={styles.list}>
          {loading ? (
            <p>Loading Dex...</p>
          ) : (
            filteredPokemon.map((p) => (
              <div key={p.name} style={styles.listItem}>
                {p.name.toUpperCase()}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Keep your Dark Mode styles from before!
const styles = {
  screenWrapper: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#121212",
    padding: "40px",
  },
  container: { width: "100%", maxWidth: "500px", color: "white" },
  title: { color: "#ffcb05", textAlign: "center" },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    backgroundColor: "#1e1e1e",
    color: "white",
    marginBottom: "20px",
  },
  list: { display: "flex", flexDirection: "column", gap: "10px" },
  listItem: {
    padding: "15px",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    borderLeft: "5px solid #ffcb05",
    fontWeight: "bold",
  },
};
