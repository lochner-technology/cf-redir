const http = require('http');
const PORT = process.env.PORT || 3000;
const TARGET_URL = 'https://www.ebay.com/str/fayralogistics';
const server = http.createServer((req, res) => {
  res.writeHead(302, { 'Location': TARGET_URL });
  res.end();
});
server.listen(PORT, () => {
  console.log(`Redirect server listening on port ${PORT}`);
});
