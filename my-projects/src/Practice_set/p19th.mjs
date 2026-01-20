import http from "node:http"; // Use the 'node:' prefix for clarity
import getAllLocations from "./byPass.js"; // Added .js extension
import sendJSON from "./utility.mjs";
import filterLocation from "./filtering.mjs";
import path from "node:path";

const PORT = 3000;
const HOST = "localhost";
const server = http.createServer(async (req, res) => {
  try {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const locations = await getAllLocations();

    // 1. Base API - Works for /api OR /api?country=japan
    if (urlObj.pathname === "/api" && req.method === "GET") {
      const country = urlObj.searchParams.get("country");
      const continent = urlObj.searchParams.get("continent");

      if (country || continent) {
        const filtered = filterLocation(locations, continent, country);
        return sendJSON(res, 200, filtered);
      }

      return sendJSON(res, 200, {
        message: "Welcome to the Locations API",
        total_locations: locations.length,
        locations: locations.map((loc) => loc.name),
      });
    }

    // 2. Continent Route - Works for /api/continent/asia
    else if (urlObj.pathname.startsWith("/api/continent/")) {
      // Get 'asia' from the URL path
      const continentFromPath = urlObj.pathname.split("/").pop(); 
      // Filter using that path value
      const filtered = filterLocation(locations, continentFromPath, null);
      return sendJSON(res, 200, filtered);
    }

    // 3. Country Route - Works for /api/country/japan
    else if (urlObj.pathname.startsWith("/api/country/")) {
      // Get 'japan' from the URL path
      const countryFromPath = urlObj.pathname.split("/").pop();
      // Filter using that path value
      const filtered = filterLocation(locations, null, countryFromPath);
      return sendJSON(res, 200, filtered);
    }

    else {
      return sendJSON(res, 404, { error: "Route not found" });
    }
  } catch (err) {
    console.error("DEBUG ERROR:", err.stack); // .stack gives you the line number!
    if (!res.headersSent) {
      return sendJSON(res, 500, { error: "Internal Server Error" });
    }
  }
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}/api`);
});
