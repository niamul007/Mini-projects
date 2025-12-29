import { useState, useEffect } from "react";

function usePokemon(searchTerm) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return; 

    // 1. ADD THIS LINE HERE
    const controller = new AbortController(); 
    
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`, {
          // Now 'controller' is defined and can be used here
          signal: controller.signal 
        });
        
        if (!res.ok) throw new Error("Pokemon not found");
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setPokemon(null);
        }
      } finally {
        // And 'controller' can be used here too
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchData();

    // 2. The cleanup function also needs 'controller' to be in scope
    return () => controller.abort();
  }, [searchTerm]); 

  return { pokemon, loading, error };
}

export default usePokemon;