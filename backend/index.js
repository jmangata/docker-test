const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur Node.js 🚀");
});


app.get("/api/test", (req, res) => {
  res.json({ message: "API Node.js fonctionne 🚀" });
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});