const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();
const port = 3000;

// Use a single line to serve all your HTML, CSS, and JS files.
// This tells Express to look for files in the same directory as this server script.
app.use(express.static(__dirname));

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  console.log(`Server is running! You can view your website at http://localhost:${port}`);
  console.log('----------------------------------------------------------------------');
  console.log('Your files are being served automatically.');
  console.log('You can visit the following pages in your browser:');
  console.log(`- http://localhost:${port}/ (for index.html)`);
  console.log(`- http://localhost:${port}/associatedhospital.html`);
  console.log(`- http://localhost:${port}/connecteddevice.html`);
  console.log(`- http://localhost:${port}/doctormyprofile.html`);
  console.log(`- http://localhost:${port}/map.html`);
  console.log(`- http://localhost:${port}/myprofile.html`);
  console.log(`- http://localhost:${port}/sensor.html`);
  console.log(`- http://localhost:${port}/signin.html`);
  console.log(`- http://localhost:${port}/sos.html`);
});