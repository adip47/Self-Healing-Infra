const http = require('http');
const port = process.env.PORT || 8080;
const name = process.env.SERVICE_NAME || "watch-history-service";
const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({status: 'ok', watch-history-service: name}));
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({watch-history-service: name, path: req.url}));
});
server.listen(port, () => console.log(`${name} listening on ${port}`));
