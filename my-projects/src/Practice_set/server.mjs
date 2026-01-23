import http from "node:http";
import getAllLocations from "./byPass.js"; // Added .mjs extension
import sendJSON from "./utility.mjs";
import filterLocation from "./filtering.mjs";

const PORT = 3000;
const HOSTNAME = "localhost";

const server = http.createServer(async (req, res) => {
  try {
    const urlObject = new URL(req.url, `http://${req.headers.host}`);
    const obj = Object.fromEntries(urlObject.searchParams);

    const destinations = await getAllLocations();

    if (urlObject.pathname === "/api" && req.method === "GET") {
      const continent = urlObject.searchParams.get("continent");
      const country = urlObject.searchParams.get("country");
      const is_open_to_public = urlObject.searchParams.get("is_open_to_public");

      if (continent || country) {
        const filteredDestinations = filterLocation(
          destinations,
          continent,
          country,
          is_open_to_public
        );
        sendJSON(res, 200, filteredDestinations);
        return;
      }

      sendJSON(res, 200, {
        message: "Welcome to the Locations API",
        total_locations: destinations.length,
        locations: destinations.map((loc) => loc.name),
      });
      return;
    } else if (urlObject.pathname.startsWith("/api/continent/")) {
      const continentFromPath = urlObject.pathname.split("/").pop();
      const filteredDestinations = filterLocation(
        destinations,
        continentFromPath,
        null,
      );
      sendJSON(res, 200, filteredDestinations);
      return;
    } else if (urlObject.pathname.startsWith("/api/country/")) {
      const countryFromPath = urlObject.pathname.split("/").pop();
      const filteredDestinations = filterLocation(
        destinations,
        null,
        countryFromPath,
      );
      sendJSON(res, 200, filteredDestinations);
      return;
    } else {
      sendJSON(res, 404, { message: "Route not found" });
      return;
    }
  } catch (err) {
    console.error("Error parsing URL:", err);
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/api`);
});
