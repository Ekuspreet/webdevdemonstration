const express = require('express');

const app = express();
app.set('view engine', 'ejs'); // Set the view engine to 'ejs'

// Simple GET endpoint
app.get('/', (req, res) => {
    console.log("Request Recieved");
    
    const ipAddress = req.ip;
    const visitor = req.headers['user-agent'];
    const serverIpAddress = req.connection.localAddress;
    res.render("landing.ejs", {
        name: "Guest",
        ipAddress: ipAddress,
        visitor: visitor,
        serverIpAddress: serverIpAddress
    });
});

// Endpoint with URL parameter
app.get('/:name', (req, res) => {
    console.log("Request Received");
    
    const name = req.params.name;
    const ipAddress = req.ip;
    const visitor = req.headers['user-agent'];
    const serverIpAddress = req.connection.localAddress;
    res.render("landing.ejs", {
        name: name,
        ipAddress: ipAddress,
        visitor: visitor,
        serverIpAddress: serverIpAddress
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
