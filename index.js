const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = 3000;

// Configuration du moteur de vues
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// ? Nouveau : servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", postRoutes);

app.listen(PORT, () => {
  console.log(`? Serveur lancé sur http://localhost:${PORT}`);
});
