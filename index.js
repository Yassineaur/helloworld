const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // Mandatory (as per the Node.js docs)
});