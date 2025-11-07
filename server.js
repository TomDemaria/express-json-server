const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();


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
