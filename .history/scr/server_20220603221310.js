import express from "express";
import bodyParser from "bodyParser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

let app = express();

//config app

app.use(bodyParser.json);

viewEngine(app);
initWebRoutes(app);
