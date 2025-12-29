import React, { useState, useEffect } from "react";

export default function PokeSearcher() {
  const [search, setSearch] = useState("pikachu"); // The term we are searching for
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // --- YOUR WORK STARTS HERE ---
    // 1. Create the 'ignore' flag
    // 2. Set loading to true and reset error to null
    // 3. Create an async function to fetch: `https://pokeapi.co/api/v2/pokemon/${search}`
    // 4. Check if res.ok is false (to handle 404s)
    // 5. If !ignore, update state and set loading to false
    // 6. Add the cleanup function
    // --- YOUR WORK ENDS HERE ---
    let ignore = false;

    setLoading(true);
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      const data = await res.json();
      console.log(data)

      if (!ignore) {
        setPokemon(data);
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      ignore = true; // "Cancel" the update permission for this fetch
    };
  }, [search]);

  function handleSubmit(formData) {
    const newSearch = formData.get("poke-name").toLowerCase();
    setSearch(newSearch);
  }

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
      <h1>Poké-Searcher</h1>

      <form action={handleSubmit}>
        <input name="poke-name" placeholder="Enter Pokemon name..." />
        <button type="submit">Search</button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      {loading && <p>Searching the tall grass...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {pokemon && !loading && !error && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{ width: "150px" }}
          />
          <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      )}
    </div>
  );
}
