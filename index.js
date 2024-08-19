
const {connection} = require("./database/connection");
const express = require("express");
const cors = require("cors");
const routes = require("./routes/article_routes");

console.log("App de node arrancada");

connection();

const app = express();

const puerto = 3900;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use("/api", routes);

app.listen(puerto, ()=> {
    console.log("Servidor corriendo");
});