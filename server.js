const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// optional root route
app.get("/", (req, res) => {
  res.send("Servidor Express en ejecución 🚀");
});

// json route for the object
app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
