import { readFile } from 'node:fs/promises';
import http from 'http';

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer(async (req, res) => {
  console.log(`Request received for: ${req.url}`);

  try {
    // Check: Does 'example.html' exist in the SAME folder as this script?
    const data = await readFile('./my-projects/src/practice_set/example.html', 'utf-8'); 
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data); 
    console.log("File sent successfully!");
  } catch (err) {
    console.error("Error reading file:", err.message);
    
    // Fallback so the browser doesn't hang
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Node Coach Error: Make sure 'example.html' exists! \nDetails: ${err.message}`);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});