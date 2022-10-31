const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto ${server.address().port}`
    );
});
server.on("error", error => console.log(`Error en servidor: ${error}`));

app.get("/", (req, res) => {
    res.send("Hola mundo!");
});
