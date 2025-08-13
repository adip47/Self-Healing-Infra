const http = require('http');
const port = process.env.PORT || 8080;
const name = process.env.SERVICE_NAME || "auth-service";
const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({status: 'ok', auth-service: name}));
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({auth-service: name, path: req.url}));
});
server.listen(port, () => console.log(`${name} listening on ${port}`));
