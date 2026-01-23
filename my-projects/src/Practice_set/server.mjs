import http from "node:http";
import getAllLocations from "./byPass.js"; // Added .mjs extension

const PORT = 3000;
const HOSTNAME = "localhost";

const server = http.createServer(async(req, res) => {
  try {

    const urlObject = new URL(req.url, `http://${req.headers.host}`);
    const obj = Object.fromEntries(urlObject.searchParams);

    const destions = await getAllLocations();

    if(urlObject.pathname  === '/api' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(destions ,null,2));
      return;
    }else{
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Route not found" }));
        return;
    }

  } catch (err) {
    console.error("Error parsing URL:", err);
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
