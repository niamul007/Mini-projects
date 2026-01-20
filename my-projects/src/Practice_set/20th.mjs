import http from 'http';

const PORT = 4000;
const HOST = 'localhost';


const server = http.createServer((req,res)=>{
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const obj = Object.fromEntries(urlObj.searchParams);
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({message: "Hello, World!" , query: obj}));
})

server.listen(PORT, HOST, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/api?name=niamul&age=22`);
});