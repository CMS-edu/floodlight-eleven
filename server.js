// Serves the game. Kept as a real Node server (not static hosting) so the
// 1v1 mode can later add a WebSocket endpoint on this same HTTP server.
const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/healthz', (req, res) => res.send('ok'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1h' }));

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Floodlight Eleven on :${PORT}`));

module.exports = server;
