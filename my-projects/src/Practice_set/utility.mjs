// This helper handles the headers AND the ending of the response
export default function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data, null, 2));
}