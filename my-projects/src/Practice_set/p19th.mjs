import http from "node:http"; // Use the 'node:' prefix for clarity
import getAllLocations from "./byPass.js"; // Added .js extension
import sendJSON from "./utility.mjs";
import filterLocation from "./filtering.mjs";

const PORT = 3000;
const HOST = "localhost";
const server = http.createServer(async (req, res) => {
  try {
    const locations = await getAllLocations();
    const cleanUrl = req.url.replace(/\/$/, "").toLowerCase();
    if (cleanUrl === "/api" && req.method === "GET") {
      return sendJSON(res, 200, {
        message: "Welcome to the Locations API",
        total_locations: locations.length,
        locations: locations.map((loc) => loc.name),
      });
    }

    // 2. Continent Route
    else if (cleanUrl.startsWith("/api/continent/")) {
      const continent = cleanUrl.split("/").pop();
      const filtered = filterLocation(locations, continent, null);
      return sendJSON(res, 200, filtered);
    }

    // 3. Country Route
    else if (cleanUrl.startsWith("/api/country/")) {
      const country = cleanUrl.split("/").pop();
      const filtered = filterLocation(locations, null, country);
      return sendJSON(res, 200, filtered);
    }

    // 4. Default 404
    else {
      return sendJSON(res, 404, { error: "Route not found" });
    }
  } catch (err) {
    console.error("DEBUG ERROR:", err.message); // Always log the error to see what went wrong

    // Only send if we haven't already started responding
    if (!res.headersSent) {
      return sendJSON(res, 500, { error: "Internal Server Error" });
    }
  }
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}/api`);
});
