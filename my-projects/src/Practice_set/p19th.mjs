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
    const obj = Object.fromEntries(urlObj.searchParams);

    const locations = await getAllLocations();
    const cleanUrl = req.url.replace(/\/$/, "").toLowerCase();
    if (urlObj.pathname === "/api" && req.method === "GET") {
      return sendJSON(res, 200, {
        message: "Welcome to the Locations API",
        total_locations: locations.length,
        locations: locations.map((loc) => loc.name),
      });
    }

    // 2. Continent Route
    else if (urlObj.pathname.startsWith("/api/continent/")) {
      const continent = urlObj.pathname.split("/").pop();
      const filtered = filterLocation(locations, continent, null);
      return sendJSON(res, 200, filtered);
    }

    // 3. Country Route
    else if (urlObj.pathname.startsWith("/api/country/")) {
      const country = urlObj.pathname.split("/").pop();
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
