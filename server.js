const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname));


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