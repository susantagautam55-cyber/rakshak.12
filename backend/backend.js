const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '..', 'public')));


const server = app.listen(port, () => {
    console.log(`✅ Server is running! View your website at http://localhost:${port}`);
    console.log('----------------------------------------------------------------------');
});



const wss = new WebSocket.Server({ server });

let sockets = [];

wss.on('connection', ws => {
    sockets.push(ws);
    console.log('🔌 A client connected to the WebSocket.');

    ws.on('close', () => {
        sockets = sockets.filter(s => s !== ws);
        console.log('👋 A client disconnected from the WebSocket.');
    });
});



app.post('/api/sos', (req, res) => {
    const data = req.body;
    console.log("🚨 SOS received:", data);

    const message = JSON.stringify(data);

    sockets.forEach(ws => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(message);
        }
    });

    res.json({ status: "ok", message: "SOS broadcasted to all clients." });
});

app.post('/api/signup', (req, res) => {
    const userData = req.body;
    console.log("📝 Sign-up data received:", userData);
    res.json({ success: true, message: "User signed up successfully!" });
});
