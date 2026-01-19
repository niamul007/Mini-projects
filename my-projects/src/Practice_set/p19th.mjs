import http from "node:http"; // Use the 'node:' prefix for clarity
import getAllLocations from "./byPass.js"; // Added .js extension

const PORT = 3000;  
const HOST = "localhost";
const server = http.createServer(async (req, res) => {
  try {
    const locations = await getAllLocations();

    if (req.url === "/api" && req.method === "GET") {
      // 1. Rename this from 'res' to 'responseData'
      const responseData = JSON.stringify({
        message: "Welcome to the Locations API",
        total_locations: locations.length,
        locations: locations.map(loc => loc.name),
      });

      // 2. Now 'res' correctly refers to the Node.js Response object
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(responseData);
    }

    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const data = { message: "Hello! To find locations, visit /api" };
      return res.end(JSON.stringify(data));
    }

    // 3. Catch-all for other URLs (so the browser doesn't hang)
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));

  } catch (err) {
    // Check if headers were already sent before trying to write 500
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain" });
    }
    return res.end("Server Error occurred.");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}/api`);
}   );