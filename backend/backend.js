const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const path = require('path');
const { connect } = require('http2');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, '0.0.0.0', () => {
    console.log("Server running on port 3000!");
    console.log("Your website is live");
});

const wss = new WebSocket.Server({ server });

let sockets = [];

wss.on('connection', ws => {
    sockets.push(ws);
    console.log('A client connected to the WebSocket.');

    ws.on('close', () => {
        sockets = sockets.filter(s => s !== ws);
        console.log('A client disconnected from the WebSocket.');
    });
});

app.post('/api/sos', (req, res) => {
    const data = req.body;
    console.log("🚨 SOS received:", data);

    sockets.forEach(ws => ws.send(JSON.stringify(data)));

    res.json({ status: "ok", received: true });
});

app.post('/api/signup', (req, res) => {
    const userData = req.body;
    console.log("📝 Sign-up data received:", userData);
    res.json({ success: true, message: "User signed up successfully!" });
});