require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware logger
app.use((req, res, next) => {
  const now = new Date().toISOString(); // fecha y hora en formato ISO
  console.log(`${req.method} ${req.path} - ${req.ip} [${now}]`);
  next();
});
// Echo route
app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

// Route to handle GET /name with query parameters
app.get('/name', (req, res) => {
  const first = req.query.first || '';
  const last = req.query.last || '';
  const fullName = `${first} ${last}`;
  res.json({ name: fullName });
});


// optional root route
app.get("/", (req, res) => {
  res.send("Servidor Express en ejecución 🚀");
});

// json route for the object
app.get('/json', (req, res) => {
  let response = { message: 'Hello json' };

  if (process.env.MESSAGE_STYLE === 'uppercase') {
    response.message = response.message.toUpperCase();
  }

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
