const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Log uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  fs.appendFileSync('errors.log', `${new Date().toISOString()} - Uncaught Exception: ${err.stack}\n`);
  process.exit(1); // Mandatory (as per the Node.js docs)
});

// Log unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  fs.appendFileSync('errors.log', `${new Date().toISOString()} - Unhandled Rejection: ${reason.stack}\n`);
});