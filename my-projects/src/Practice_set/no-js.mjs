import http from "node:http"; // Use the 'node:' prefix for clarity
import getAllLocations from "./byPass.js"; // Added .js extension
import data from "./data.js";

const PORT = 3000;
const HOST = "localhost";

const server = http.createServer((req, res) => {
  // 1. Change Content-Type to application/json so browsers/apps know what it is
  res.writeHead(200, { "Content-Type": "application/json" });

  try {
    const locations = getAllLocations();
    // 2. Wrap everything in one JSON response
    const responseData = JSON.stringify({
      message: "Hello! Data fetched successfully.",
      count: locations.length,
      data: locations,
    }, null, 2);

    res.end(responseData); 
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error: Failed to fetch locations.");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}/`);
});

// Get the current directory of this script
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const PORT = 3000;
// const HOST = "localhost";

// const server = http.createServer(async (req, res) => {
//   console.log(`Request received for: ${req.url}`);
//   const url = new URL(req.url, `http://${req.headers.host}`);
//   const method = req.method;
//   console.log(`${method} request for ${url}`);
//   try {
//     // 2. The Router Logic
//     if (url === "/" || url === "/home") {
//       const data = await readFile(join(__dirname, "index.html"));
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     } else if (url === "/api/status") {
//       // Power Move: Sending JSON data instead of HTML
//       const status = { status: "Running", uptime: process.uptime() };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(status));
//     } else {
//       // 3. The 404 Catch-all
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("404: Page Not Found");
//     }
//   } catch (err) {
//     res.writeHead(500);
//     res.end("Server Error");
//   }
// });

// server.listen(PORT, HOST, () => {
//   console.log(`Server running at http://${HOST}:${PORT}/`);
// });
