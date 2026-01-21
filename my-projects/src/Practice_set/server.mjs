import http from 'node:http';

const PORT = 3000;
const HOSTNAME = 'localhost';

const server = http.createServer((req,res)=>{
    const urlObject = new URL(req.url, `http://${req.headers.host}`);
    const obj = Object.fromEntries(urlObject.searchParams);
    console.log('Full URL:', urlObject.href);
    console.log('Pathname:', urlObject.pathname);
    console.log('Query Parameters:');
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
})

server.listen(PORT,HOSTNAME,()=>{
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});