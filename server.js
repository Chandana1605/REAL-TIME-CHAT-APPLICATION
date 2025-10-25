// server/server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('🟢 Client connected');

  ws.on('message', (msg) => {
    const data = JSON.parse(msg);
    const payload = {
      name: data.name,
      text: data.text,
      time: new Date().toLocaleTimeString(),
    };

    // Broadcast message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(payload));
      }
    });
  });

  ws.on('close', () => console.log('🔴 Client disconnected'));
});

console.log('✅ WebSocket server running at ws://localhost:8080');
cd