require('dotenv').config();
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));


// middleware logger
app.use((req, res, next) => {
  const now = new Date().toISOString(); // fecha y hora en formato ISO
  console.log(`${req.method} ${req.path} - ${req.ip} [${now}]`);
  next();
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

// Echo route
app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

// ruta GET y POST para /name
app.route("/name")
  .get((req, res) => {
    const first = req.query.first || '';
    const last = req.query.last || '';
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const first = req.body.first || '';
    const last = req.body.last || '';
    res.json({ name: `${first} ${last}` });
  });

app.get('/test-post', (req, res) => {
  res.sendFile(__dirname + '/views/test-post.html');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
